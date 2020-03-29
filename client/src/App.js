import React, { useEffect } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

import { GlobalStyle } from './global.styles'; // 使用作用于全局的css( 等待笔记 )

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignPage from './pages/signpage/signpage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import TelPage from './pages/telpage/telpage.component';

import { connect } from 'react-redux';
import { setCurrentUser, checkUserSession } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectUserCurrentUser } from './redux/user/user.selectors';

import { selectCollectionShopArray } from './redux/shop/shop.selectors';


const App = ({ checkUserSession, currentUser }) => {

  /**
   * useEffect代替react生命周期( 完成笔记 ) 
   *    0. componentDidMout
   *    1. componentWillUnmout
   *      a) 注意return的为一个函数,在函数内才属于此生命周期范围
   *      b) return ()=>{ 此内 }
   */
  useEffect( ()=>{
    // 这里相当于: componentDidMout;
    checkUserSession();
    
    return () => {
      // 这里相当于: componentWillUnmout;
      console.log('useEffect代替componentWillUnmout');
    }

  },[ checkUserSession ] );

  return(
    <div className="App">
      <GlobalStyle />
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
        <Route exact path='/sign' render={ ()=> currentUser ? <Redirect to='/' /> : <SignPage />  } />
        
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='/tel' component={TelPage} />
      </Switch>
    </div>
  );

}


const mapStateToProps = createStructuredSelector ({
  currentUser: selectUserCurrentUser,
  collectionsArray: selectCollectionShopArray,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser(user) ),
  checkUserSession: () => dispatch( checkUserSession() ),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);