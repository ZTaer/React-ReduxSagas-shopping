import React from 'react';
import { ShopPageStyledContainer } from './shopage.styles';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// redux-thunk异步数据的使用( 完成笔记 )
// redux-saga异步数据的使用方法与redux-thunk相同( 完成笔记 )
    // a) 其实就是直接将action函数正常redux使用的方式就好
import { axiosCollectionsStart } from '../../redux/shop/shop.action';

// 使用"容器模式"( 完成笔记 )
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionpageContainer from '../collectionpage/collectionpage.container';
import { useEffect } from 'react';

const ShopPage = ({ axiosCollectionsStart,match }) => {

    useEffect( ()=>{
       axiosCollectionsStart(); // 执行此函数获取异步数据
    },[ axiosCollectionsStart ] );

    return (
        // 高级路由( 完成笔记 )
            // 0. 子级组件中使用路由
            // 1. 注意事项:
                // a) 在主路由中去除exact(当前主路由位置为APP.js)
                    // <Route path='/shop' component={ShopPage} />
                // b) 在当前组件中路由要有exact,match.path为当前url位置
                    // 0. 当前页面(必备): <Route exact path={`${match.path}`} component={CollectionOverView} />            
                    // 1. 子页面: <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            // 2. 通常情况下是由match配置动态路由
        <ShopPageStyledContainer>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionOverviewContainer}
            />            
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionpageContainer}
            />            
        </ShopPageStyledContainer>        
    );
}

const mapDispatchToProps = dispatch => ({
    axiosCollectionsStart: ()=>dispatch( axiosCollectionsStart() ),
});

export default connect(null,mapDispatchToProps)(ShopPage);
