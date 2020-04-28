import React, { useEffect, lazy, Suspense } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

import { GlobalStyle } from './global.styles'; // 使用作用于全局的css( 完成笔记 )

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
/*
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignPage from './pages/signpage/signpage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import TelPage from './pages/telpage/telpage.component';
*/
import { connect } from 'react-redux';
import { setCurrentUser, checkUserSession } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectUserCurrentUser } from './redux/user/user.selectors';
import { selectCollectionShopArray } from './redux/shop/shop.selectors';

// 使用: 抓取错误组件( 完成笔记 )
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// React Lazy + Suspense代码拆分,性能提升( 完成笔记 )
    // 0. 目的: 
        // a) ReactLazy: 代码拆分成块,只加载所需的代码,不加载多余的代码,使我们的程序初试加载使更加迅速
        // b) Suspense: 精确抓取组件错误,同时给ReactLazy擦屁股,因为使用ReactLazy会出现错误
        // c) 适合大型项目
    // 1. 使用:
        // a) ReactLazy:
            // 0. 要与路由组件配合
            // 1. 被Lazy处理过的组件，要嵌套在Suspense组件内, 否则将出错
            // 2. 模型: const HomePage = lazy( () => import('./pages/homepage/homepage.component') );
        // b) Suspense:
            // 0. 模型: <Suspense fallback={<Spinner />} > 嵌套路由标签，渲染被lazy加工过的组件 </Suspense> 
const HomePage = lazy( () => import('./pages/homepage/homepage.component') );
const ShopPage = lazy( () => import('./pages/shoppage/shoppage.component') );
const SignPage = lazy( () => import('./pages/signpage/signpage.component') );
const CheckoutPage = lazy( () => import('./pages/checkout/checkout.component') );
const TelPage = lazy( () => import('./pages/telpage/telpage.component') );

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
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
          </Suspense>
        </ErrorBoundary>
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