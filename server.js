// 0. 导入必须的库
const express = require('express'); // node.js框架方便构建服务
const cors = require('cors'); // 处理跨源请求( 跨服务器请求 )
const bodyParser = require('body-parser'); // 方便加工处理json
const path = require('path');
const compression = require('compression'); // gzip压缩库，使项目文件变的更小
const enforce = require('express-sslify'); // 为PWA配置: 强制https,因heroku没有强制https选项( 等待笔记 )

// 1. 如果不是"生产环境"则进入dotenv库中的config()函数
if( process.env.NODE_ENV !== 'production' ){
    require('dotenv').config();
}

// 2. 服务初始化准备
const app = express(); // 实例化express
const port = process.env.PORT || 5000; // 测试使用的端口,为5000,react项目需配合修改" 'proxy': 'http://localhost:5000' "

    // a) 处理stripe支付
        // 0. process.env.xxx: 既然可以直接读取".env"文件中的内容
    const stripe = require('stripe')( process.env.STRIPE_SECRET_KEY );

// 3. 加工处理数据
app.use( compression() ); // gzip压缩开启

app.use( bodyParser.json() ); // 收到的如何请求转为json格式
app.use( bodyParser.urlencoded({ extended: true }) ); // 处理url编码
app.use( enforce.HTTPS({ trustProtoHeader: true }) ); // 信任协议标头变为true,就是在heroku中强制https开启( 等待笔记 )
app.use( cors() ); // 处理跨源请求( 跨服务器请求 )


// 4. heroku处理请求
if( process.env.NODE_ENV === 'production' ){
    app.use( 
        express.static( path.join(__dirname, 'client/build') ) // 设定react生产环境页面路径
    );

    app.get( '*', function(req, res){
        res.sendFile( path.join(__dirname, 'client/build', 'index.html') ) // 默认请求返回index.html
    });

}


// 5. 监听端口是否正常,若出错则报错
app.listen(port, (error) =>{
    if(error) throw error; // throw创建错误,返回错误信息
    console.log( '端口正常' + port );
});

// 配置PWA: node配置service-worker.js( 等待笔记 )
    // a) service-worker.js来自craect-react-app内部
app.get('/service-worker.js', ( req, res ) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});


// 6. post监听支付请求,反馈信息
app.post('/payment', (req, res)=>{
    // a) 这里支付的主要信息
        // 0. token为前端传送的变量,包含stripe所有支付信息
    const body = { 
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'CNY'
    };

    // b) 给stripe发送支付信息
    stripe.charges.create(
        body,
        ( stripeErr, stripeRes )=>{
            if( stripeErr ){
                res.status(500).send({ error: stripeErr });
            }
            else{
                res.status(200).send({ success: stripeRes });
            }
        }
    );

} );
