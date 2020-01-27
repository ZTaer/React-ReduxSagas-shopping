import React from 'react';
import "./shopage.styles.scss";

import { Route } from 'react-router-dom';

import CollectionOverView  from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collectionpage/collectionpage.component';

import { connect } from 'react-redux';

// redux-thunk异步数据的使用( 完成笔记 )
import { axiosCollectionsStateAsync } from '../../redux/shop/shop.action';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoaded, selectCollectionsState } from '../../redux/shop/shop.selectors';

// react加载器的使用( 完成笔记 )
import WithSpinner from '../../components/with-spinner/with-spinner.component';
// react加载器: 要使用加载器的组件准备
const CollectionOverViewWithSpinner = WithSpinner( CollectionOverView );
const CollectionPageWithSpinner = WithSpinner( CollectionPage );



class ShopPage extends React.Component {

    componentDidMount(){
       const { axiosCollectionsStateAsync } = this.props; 
       axiosCollectionsStateAsync(); // 执行此函数获取异步数据
    }

    render(){
        // 对象解构法 - 创建对象属性变量并赋值( 完成笔记 )
            // 0. const { collectionShop } = this.state; 相当于 const collectionShop = this.state.collectionShop;
            // 1. 注意属性名称与变量名称一致，以及注意大括号。
        const { match, isCollectionsAxiosing, isCollectionsLoad } = this.props;

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
            // react加载器使用( 完成笔记 )
                // 0. 注意loadding变量来自于this.state
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={
                        props => ( <CollectionOverViewWithSpinner isLoading={ isCollectionsAxiosing  } {...props} /> )
                    }
                />            
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={
                        props => ( <CollectionPageWithSpinner isLoading={ isCollectionsLoad } {...props} /> )
                    }
                />            
            </div>        
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsAxiosing: selectCollectionsState,
    isCollectionsLoad: selectCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
    axiosCollectionsStateAsync: ()=>dispatch( axiosCollectionsStateAsync() ),
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
