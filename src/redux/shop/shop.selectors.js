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
    collectionShop => collectionShop ? Object.keys(collectionShop).map( e=>collectionShop[e] ) : [] , // 防止没有数据时发生错误, 所以返回一个空数组( 异步数据 )
);

// 构建: select接受参数函数处理写法( 完成笔记 )
export const selectCollectionItem = collectionUrlProps => createSelector(
    [selectCollectionShop],
    collectionShop => collectionShop ? collectionShop[ collectionUrlProps ] : null  // 直接索引对象数据最最高效的, 比filuter,find都要高效: 原理https://www.kirupa.com/html5/hashtables_vs_arrays.htm( 完成笔记 )( 异步数据 )
);

// 选择失败时返回的数据
export const selectCollectionsFailure = createSelector(
    [selectShop],
    shop => shop.errorMsg,
);

// 选择异步获取数据的状态
export const selectCollectionsState = createSelector(
    [selectShop],
    shop => shop.isAxiosing,
);

// redux-thunk配置xx.selectors.js验证异步数据是否存在,配合加载器布尔值,防止出错( 完成笔记 )
    // 0. "!!"符号: 将变量数据转布尔值类型
        // a) !!"xxx" --> true; 
        // b) !!null --> false;
    // 1. 此时当数据存在时返回false隐藏加载器, 否则相反
export const selectCollectionsLoaded = createSelector(
    [selectCollectionShop],
    collectionShop => !( !!collectionShop ),
)