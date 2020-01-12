import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignPage from './pages/signpage/signpage.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.config';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectUserCurrentUser } from './redux/user/user.selectors';

// 测试路由 - 2
const TelPage = props => ( <div> <h2 className="display-2" > { props.match.params.proName }: 等待建设页面 </h2></div> );
// 在Switch标签外不受路由影响 - 无论页面如何变化,组件依然显示存在( 完成笔记 ) 
    // 0. 把导航栏放在switch之外，这样导航栏将一直存在。不会受路由的控制 
    // 1. 这是一个非常非常重要的功能 - 不受页面刷新影响方法

class App extends React.Component {

  unsubscribeFromAuth = null; // Google登陆验证防内存泄漏( 完成笔记 )
  
  // 获取登陆用户信息( 完成笔记 )
  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {

      // 如果用户登陆
      if( user ){
        // firebase-onSnapshot()监听文档对象(快照对象)方便数据更新(  完成笔记)
          // 0. onSnapshot(props=>{xx}) 用于监听快照对象,如果数据发生变化,方便数据变化时实时更新
          // 1. props用于传递快照对象的数据,于监听快照对象无疑
        const userRef = await createUserProfileDocument( user ); // React什么周期组件内,可以使用await等待异步数据(  完成笔记)
        userRef.onSnapshot( props => {
          setCurrentUser({
            id: props.id,
            ...props.data()
          });
        } );
      }

      // 注意:此乃谷歌原始配置信息
      setCurrentUser( user );
    } );
  }

  // 卸载组件时,退出登陆( 完成笔记 )
  componentWillUnmount(){
    this.unsubscribeFromAuth(); // class中赋值骚操作,相当于this.unsubscribeFromAuth = null;( 完成笔记 )
  }

  render(){
    return(
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {
            // 关于路由render属性的功能( 完成笔记 )
              // 0. 用法: <Route exact path render={()=> <自定义标签 />} >
              // 1. 有render属性则不能有component属性
              // 2. 必需要有exact属性
            // 关于路由Redirect的使用,重定向指定页面( 完成笔记 )
              // 0. 导入Redirect: import { Switch,Route,Link,Redirect } from 'react-router-dom';
              // 1. 使用方式<Redirect to='路由位置'>,直要被渲染将直接跳转指定路由位置
              // 2. 实列( 当用户登陆后,则将无法访问注册/登陆页面 ):
          }
          <Route exact path='/sign' render={ ()=> this.props.currentUser ? <Redirect to='/' /> : <SignPage />  } />
          
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/tel' component={TelPage} />
        </Switch>
      </div>
    );
  }

}


// 测试路由 - 1 
// 关于Route标签传递的参数props( 完成笔记 )
  // 0. match属性对象:
    // a) url: 保存‘当前’在浏览器中的url链接( 仅限于保存符合路由规则的url,想要完整的url信息请看props.location.pathname属性解析 )
      // 0. 常用于创建动态路径( 具体看下方实战代码 )
    // b) path: 保存在Route标签中的path属性内容
      // 0. 如: <Route path='/pro/:proID' component={ProTextTest} /> 那么 props.match.path == '/pro/:proID';
    // c) isExact: 当url符合path规定的路由路径时为True, 否则为false
    // d) params: 常用于它的参数来配置'动态路由'页面跳转
      // 0. 常与Route标签中 path='/:xxx'下的':xxx'符号配合, 因为它能让:xxx变为params的属性
      // 1. 如: 
        /**
         * 路由配置: <Route path='/pro/:proID' component={ProTextTest} />
         * url访问: xxxx/pro/123
         * 那么params对象属性有: params = { proID: 123 }
         * **/
  // 1. history属性对象:
    // a) history下有很多函数属性,目前最常用的为push函数,用于跳转指定url页面,与Link标签功能相似
    // b) push(): 跳转指定url
      // 0. 如: <button onClick={ ()=> props.history.push('/pro') } > 产品页面 </button>
  // 2. location属性对象:
    // a) pathname: 保存完整的‘当前url信息’
      // 0. 如: 
        /**
         * 路由规则: <Route path='/pro/:proID' component={ProTextTest} />
         * 访问域名: http://localhost:3000/pro/123123/123123
         */
        // a) props.location.pathname = "/pro/123123/123123" ;
        // c) props.match.url = "/pro/123123";
        // b) 与match.url的区别: 在于pathname保留完整的url信息，但math.url只保存符合路由规则的url信息
// Link标签库：直接跳转到指定url( 完成笔记 )
  // 0. 如: <Link to="/" > 返回主页 </Link> 
  // 1. 在前端界面将被渲染为‘a标签’
/*
const HomePageTest = props => {
  console.log( '1',props );
  return ( 
    <div> 
      <h2 className="display-1" > 主页 </h2>
      <button onClick={ ()=> props.history.push('/pro') } > 产品页面 </button>
    </div> 
  );
}
const ProTest = props => {
  console.log( '2',props );
  return ( 
      <div> 
        <h2 className="display-1" > 产品页 </h2>
        <Link to="/" > 返回主页 </Link>      

        <Link to={ `${props.match.url}/13` } > 产品13 - match.url实战 </Link>      
        <Link to={ `${props.match.url}/14` } > 产品14 - match.url实战 </Link>      
      </div> 
    );
}
const ProTextTest = props => { 
  console.log( '3',props );
  return ( <div> <h2 className="display-1" > 产品详情页ID: { props.match.params.proID } </h2></div> ); 
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePageTest} />
        <Route exact path='/pro' component={ProTest} />
        <Route path='/pro/:proID' component={ProTextTest} />
      </Switch>
    </div>
  );
}
*/
/*
// 测试路由 - 0
const HatsPage = () => ( <div> <h2 className="display-2" > TEST - Router </h2></div> );
const TestPage = () => ( <div> <h2 className="display-2" > TEST2 - Router </h2></div> );

function App() {
  return (
    // Route标签使用:( 完成笔记 )
      // 0. 模型: <Route exact={true/false} path="/" component={JSX} >默认3个参数
      // 1. exact属性:
        // a) exact为是否开启精确路由访问
        // b) 如果Route标签不写exact: 则默认exact为false否则为true
        // c) 关于exact属性的使用:
          // 0. 在<Switch>内，
            // a) 不开启exact: 则只能访问'/'路由页面
            // b) 开启exact: 则可以访问精确路由页面
          // 1. 不在<Switch>则进行叠加JSX渲染,就是根目录页面+指定路由页面渲染在同页
      // 2. path属性:
        // a) path="/"按照web路径来写
      // 3. component属性:
        // a) component={JSX}: 放置渲染的JSX变量
    <div className="App">
      <Switch>
        <Route exact={ true } path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/test' component={TestPage} />
      </Switch>
    </div>
  );
}
*/
const mapStateToProps = createStructuredSelector ({
  currentUser: selectUserCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser(user) ),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);