
/*
// Firebase配置Google登陆,核心函数总结：( 完成笔记 )
    // Firebase配置:
        // 0. 准备好需要用的库:
            import firebase from 'firebase/app'; // 获取firebase/app我们只需要它就够用拉
            import 'firebase/firestore'; // 获取应用函数库
            import 'firebase/auth'; // 获取认证函数库
        // 1. 得到firbase的认证: 
            // a) firebase.initializeApp(config);
            // b) config信息在firbase中获得
        // 2. 第三方登陆认证库: firbase.auth()
        // 3. firbase程序包/扩展功能小背包: firebase.firestore()
    // 谷歌登陆配置:
        // 0. 初始化谷歌登陆: const provider = new firebase.auth.GoogleAuthProvider();
        // 1. 开启弹窗登陆: provider.setCustomParameters({ prompt: 'select_account' });
        // 2. 此函数开启谷歌登陆窗口: export const signInWithGoogle = () => auth.signInWithPopup(provider);
            // a) 开启谷歌登陆窗口: signInWithGoogle();
            // b) 获取登陆者信息( 返回一个对象,别忘记防内存泄漏 ): auth.onAuthStateChanged( user => console.log(user) );
            // c) 退出登陆: auth.signOut()
*/

import firebase from 'firebase/app'; // 获取firebase/app我们只需要它就够用拉
import 'firebase/firestore'; // 获取应用函数库
import 'firebase/auth'; // 获取认证函数库

// 认证签名信息
const config = {
    apiKey: "AIzaSyB2ypDqAys_PEcg2kSW4bZwAJh0PxnjNtw",
    authDomain: "shopping-react-test.firebaseapp.com",
    databaseURL: "https://shopping-react-test.firebaseio.com",
    projectId: "shopping-react-test",
    storageBucket: "shopping-react-test.appspot.com",
    messagingSenderId: "448778125411",
    appId: "1:448778125411:web:887aaf1acf4e8723c23856",
    measurementId: "G-DQ5KCRGZB0"
}

firebase.initializeApp(config); // 提交认证前面信息

export const auth = firebase.auth(); // 认证函数库
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider(); // 初始化谷歌登陆
// googleProvider.setCustomParameters({ prompt: 'select_account' }); // 开启弹窗选择账号
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // 验证用户

export default firebase; // 默认导出

/*
// Firebase获取Ref对象方式 - 请求数据库内容( 完成笔记 )
    // 0. 普通方法:
    const test = await firestore.collection('users').doc(`/users/${user.uid}`).collection('boughtItems').doc(`XipnGtHbDjWGIfngyj5F`);
    // 1. 便捷式方法:
    // a) 获取Ref对象合集:
    const test2 = await firestore.collection(`/users/aN6rU93VOpAlywi9p01N/boughtItems`);
    // b) 获取Ref对象文档:
    const test3 = await firestore.doc(`/users/aN6rU93VOpAlywi9p01N/boughtItems/XipnGtHbDjWGIfngyj5F`);
*/


// firestore.doc('数据库路径')/.collection('数据库路径')获取指定路径文档信息( 完成笔记 )
    // 0. 基于.doc()才能使用:
        // a) get()获取文档快照对象:
            // exists: 如果目标在数据库中则为true否则为false,常用于验证用户是否在数据库中
        // b) set()编辑数据:
            // firstore.doc('xxx').set({ xxx:yyy, xxx2:yyy2 });
        // c) update()更新数据
        // d) delete()删除数据
        // e) .onSnapshot( props => {} )监听文档,文档快照发生变化时方便更新数据。
    // 1. 基于.collection()才能使用
        // a) get()获取合集快照
        // b) add() 在合集中添加内容,并且自动创建文档ID
            // firestore.collection('xxx').add({ xxx:yyy });
    // 2. 关于firestore专有名词:
        // a) Ref对象: 由.doc()和.collection()获取的对象数据 
        // b) 快照对象: 由.get()获取的对象数据
        // c) 存储对象: 从快照对象中获取数据.data()来获取

export const createUserProfileDocument = async ( userAuth, additionalData ) =>{

        if( !userAuth ) return; // 如果为发生登陆,则什么都不干

        const userRef = await firestore.doc(`/users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        // firestore测试ref对象的数据获取( 完成笔记 )
        /*
        const collectionRef = await firestore.collection(`/users`);
        const collectionSnapshot = await collectionRef.get();
        console.log( 'test',collectionSnapshot.docs.map( doc => doc.data() ) ); // 注意.docs为数组,不能直接data()处理, 需迭代出内容
        */

        if( !snapShot.exists ){
            const { displayName, email, photoURL  } = userAuth;
            const createTime = new Date(); // 获取当前时间( 完成笔记 )

            console.log('----------- 创建卡号 -----------');
            try{
                await userRef.set({
                    displayName,
                    email,
                    photoURL,
                    createTime,
                    ...additionalData,
                });
                console.log('当前数据:',userRef);
            }
            catch(err){
                console.log( err );
            }
        }
        return userRef; // 传递获取的用户信息方便进行其它操作
};

// 构建: firebase添加数据,使用firestore.batch批处理传送( 完成笔记 )
    // a) 只所以使用batch来传输数据, 是为了保证传输数据的完整性, 因数据传输时会分批传输, 若有一方失败, 则否定全部数据传输失败, 保证传输成功的数据完整性, 可控性.
    // b) 获取batch函数: const batch = firestore.batch()
    // c) 设定待传送的数据: batch.set( 空文档, 传送数据 );
    // d) 上传数据: batch.commit()
    // f) 注意: 异步上传数据
export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
    const collectionRef = firestore.collection( collectionKey );
    const batch = firestore.batch();
    objectsToAdd.forEach( obj => {
        const newDocRef = collectionRef.doc(); //  获取空文档
        batch.set( newDocRef, obj );
    } );
    return await batch.commit();

};

// 获取商品数据从firebase( 完成笔记 )
    // 0. 在这里加工处理商品数据
    // 1. encodeURI( 字符串 ); 将字符串转换为URL编码, 方便浏览器处理
export const convertCollectionsSnapshotToMap = collections => {
    const transfromedCollection = collections.docs.map( doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI( title.toLowerCase() ),
            id: doc.id,
            title,
            items,
        }
    } )

    // reduce骚操作构建对象类型数据( 完成笔记 )
        // 0. 核心: { [key]: value }: 将变量变为对象的键值
        // 1. reduce()不仅可以计算统计数字,也可以用于构建数据
    return transfromedCollection.reduce( ( total, cur )=>{
        total[ cur.title.toLowerCase() ] = cur;
        return total;
    },{} );

}

// 验证用户状态是否有登陆
export const getCurrentUser = () => {
    return new Promise( (resolve, reject)=>{
        auth.onAuthStateChanged( userAuth => resolve(userAuth), reject );
    } );
}