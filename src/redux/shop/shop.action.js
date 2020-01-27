import { shopActionTypes } from './shop.types';

// redux-thunk配置xx.action.js( 完成笔记 )

import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.config';

export const axiosCollectionsState = () => ({
    type: shopActionTypes.AXIOS_COLLECTIONS_STATE,
});

export const axiosCollectionsFailure = errorMsg => ({
    type: shopActionTypes.AXIOS_COLLECTIONS_FAILURE,
    payload: errorMsg,
});

export const axiosCollectionsSuccess = data => ({
    type: shopActionTypes.AXIOS_COLLECTIONS_SUCCESS,
    payload: data,
});

// redux-thunk核心目的: 就是将获取异步数据的函数放在xx.action.js中
    // 0. redux-thunk已配置在'中间件'中, 所以可以直接使用dispatch()来执行对应的action函数
    // 1. redux thunk 在中间件中会抓取自己力所能及的事件，比如action中的dispatch函数
export const axiosCollectionsStateAsync = () => {
    return dispatch => {
        const collectionsRef = firestore.collection('collections');
        dispatch( axiosCollectionsState() ); // 开始获取数据状态

        const collectionMap = async () => {
            try{
                const snapshot = await collectionsRef.get();
                dispatch( axiosCollectionsSuccess( convertCollectionsSnapshotToMap( snapshot ) ) );
            }
            catch( error ){
                dispatch( axiosCollectionsFailure( error ) );
            };
        }

        collectionMap();
    }
}