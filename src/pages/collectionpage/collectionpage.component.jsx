import React from 'react';
import "./collectionpage.styles.scss";

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollectionItem } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collectionItem }) => {
    const { title, items } = collectionItem;
    return(
        <div className="collection-page">
            <h2 className="title">
                { title }
            </h2>
            <div className="items">
                {
                    items.map( item => ( <CollectionItem key={item.id} item={item} /> ) )
                }
            </div>
        </div>
    );
};

// 使用: select传递参数写法( 完成笔记 ) 
    // 0. 传入参数解析:
        // a) state: 为redux默认传入的对象数据
        // b) ownProps(任意名称): 为当前组件中的this.props对象数据
    // 1. select函数使用方式:
        // b) selectXXX( 自定义传入参数 )( Redux数据 )
const mapStateToProps = (state, ownProps) => ({
    collectionItem: selectCollectionItem(ownProps.match.params.collectionId)(state),
})

export default withRouter( connect(mapStateToProps)(CollectionPage) );