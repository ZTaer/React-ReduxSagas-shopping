import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollectionShop = createSelector(
    [selectShop],
    shop => shop.collectionShop,
);

export const selectCollectionShopArray = createSelector(
    [selectCollectionShop],
    // 对象转数组( 完成笔记 )
        // 0. 核心: 
            // a) Object.keys( 对象数据 )返回数组对象的键值
                // 0. test = { a:123, b: 334 } --> Object.keys(test) --> [ 'a', 'b' ]
            // b) 键值数组.map( 创建新数组 )通过键值迭代索引对象内容,在通过map创建新数组
        // 1. 实例:
    collectionShop => Object.keys(collectionShop).map( e=>collectionShop[e] ) ,
);

// 构建: select接受参数函数处理写法( 完成笔记 )
export const selectCollectionItem = collectionUrlProps => createSelector(
    [selectCollectionShop],
    collectionShop => collectionShop[ collectionUrlProps ]  // 直接索引对象数据最最高效的, 比filuter,find都要高效: 原理https://www.kirupa.com/html5/hashtables_vs_arrays.htm( 完成笔记 )
);