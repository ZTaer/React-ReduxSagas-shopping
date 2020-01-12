import React from 'react';
import "./shopage.styles.scss";

import { Route } from 'react-router-dom';

import CollectionOverView  from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collectionpage/collectionpage.component';

const ShopPage = ({ match }) => {         
    // 对象解构法 - 创建对象属性变量并赋值( 完成笔记 )
        // 0. const { collectionShop } = this.state; 相当于 const collectionShop = this.state.collectionShop;
        // 1. 注意属性名称与变量名称一致，以及注意大括号。
    console.log(1111,match);
    // 高级路由( 完成笔记 )
        // 0. 子级组件中使用路由
        // 1. 注意事项:
            // a) 在主路由中去除exact(当前主路由位置为APP.js)
                // <Route path='/shop' component={ShopPage} />
            // b) 在当前组件中路由要有exact,match.path为当前url位置
                // 0. 当前页面(必备): <Route exact path={`${match.path}`} component={CollectionOverView} />            
                // 1. 子页面: <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        // 2. 通常情况下是由match配置动态路由
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverView} />            
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />            
        </div>        
    );
}

export default ShopPage;