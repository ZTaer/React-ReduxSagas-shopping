// redux-saga创建xx.saga.js, 异步获取商品数据实战( 完成笔记 )

import { takeLatest,call,put } from 'redux-saga/effects';
import { shopActionTypes } from './shop.types';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.config';
import { axiosCollectionsFailure, axiosCollectionsSuccess } from './shop.action';

// 0. yield的在saga中的作用
    // a) yield在saga中代表, 中间件值数据加工控制权交由redux-saga处理
    // b) 同时其功能相似与await
    // c) 甚至在生成器函数中可直接使用try{}catch(error){}套装
export function* axiosCollectionsAsync(){
    try{
        const collectionsRef = yield firestore.collection('collections');
        const snapshot = yield collectionsRef.get();

        // 因firestore在未翻墙时会返回空数据故创建此步骤,验证是否真正获取到了数据
        if (snapshot.docs.length){
            // redux-saga: yield call( 函数, 参数 ); call可配合yield执行函数( 完成笔记 )
                // 0. 如果yield convertCollectionsSnapshotToMap( snapshot );则将报错
                // 1. yield call()配合来完成异步函数的执行
            const collectionMap = yield call( convertCollectionsSnapshotToMap, snapshot );

            // redux-saga: yield put( action函数 ); 用于执行redux的action函数( 完成笔记 )
            yield put( axiosCollectionsSuccess( collectionMap ) );

        }else{
            // 在try中创建错误,其错误信息交由catch处理( 完成笔记 )
            throw new Error('获取数据失败');
        }
    }
    catch(error){
        yield put( axiosCollectionsFailure( error ) );
    }
}

// 1. takeEvery( type, 生成器函数 )循环监听type从而促发生成器函数
    // a) takeEvery每一次被促发, 则创建一个新异步saga函数, 从而保证执行效率且不影响主程序
export function* axiosCollectionsStart(){
    yield takeLatest( shopActionTypes.AXIOS_COLLECTIONS_START, axiosCollectionsAsync );
}
