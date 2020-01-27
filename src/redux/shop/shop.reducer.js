import { shopActionTypes } from './shop.types';
// redux-thunk配置xx.reducer.js( 完成笔记 )
    // 0. 注意获取数据的3种状态,此乃redux获取异步数据常用模式( 变量名称自定义 )
        // a) 当前数据获取状态: isAxiosing ( 注意布尔值的变化, 常用于配合加载器 )
        // b) 获取数据成功: collectionShop
        // c) 获取数据失败: errorMsg


const INITIAL_STATE = {
    collectionShop: null,
    isAxiosing: false, // 获取数据的状态
    errorMsg: undefined, 
}

const shopReducer = ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case shopActionTypes.AXIOS_COLLECTIONS_STATE:
            return {
                ...state,
                isAxiosing: true,
            }
        case shopActionTypes.AXIOS_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isAxiosing: false,
                collectionShop: action.payload,
            }
        case shopActionTypes.AXIOS_COLLECTIONS_FAILURE:
            return{
                ...state,
                isAxiosing:false,
                errorMsg: action.payload,
            }

        default:
            return state;
    }
};

export default shopReducer;