import React from 'react';
import "./shopage.styles.scss";

import { Route } from 'react-router-dom';

import CollectionOverView  from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collectionpage/collectionpage.component';

import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.config';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

// react加载器的使用( 完成笔记 )
import WithSpinner from '../../components/with-spinner/with-spinner.component';
// react加载器: 要使用加载器的组件准备
const CollectionOverViewWithSpinner = WithSpinner( CollectionOverView );
const CollectionPageWithSpinner = WithSpinner( CollectionPage );



class ShopPage extends React.Component {

    // react加载器: 有redux时, react简化版state写法, 可以配合this.setState()使用( 完成笔记 )
    state = {
        loadding: true,
    }
    
    unsubscribeFromSnapshoty = null;

    componentDidMount(){
        const { updateCollections } = this.props;

        // 从firebase获取动态数据( 完成笔记 )
            // 0. onSnapshot() 监听ref对象数据变化
        const collectionsRef = firestore.collection('collections');
        collectionsRef.onSnapshot( async snapshot => {
            updateCollections(convertCollectionsSnapshotToMap( snapshot ));
            this.setState({ loadding:false }); // react加载器: 加载完数据, loadding为false
        } )

    }

    render(){
        // 对象解构法 - 创建对象属性变量并赋值( 完成笔记 )
            // 0. const { collectionShop } = this.state; 相当于 const collectionShop = this.state.collectionShop;
            // 1. 注意属性名称与变量名称一致，以及注意大括号。
        const { match } = this.props;
        const { loadding } = this.state;
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
                        props => ( <CollectionOverViewWithSpinner isLoading={ loadding } {...props} /> )
                    }
                />            
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={
                        props => ( <CollectionPageWithSpinner isLoading={ loadding } {...props} /> )
                    }
                />            
            </div>        
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsData => dispatch( updateCollections( collectionsData ) ),
});

export default connect(null,mapDispatchToProps)(ShopPage);
