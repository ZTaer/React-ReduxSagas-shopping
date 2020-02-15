// redux-saga: 构建root-saga.js方便redux管理( 完成笔记 )
import { call, all } from 'redux-saga/effects'
import { axiosCollectionsStart } from './shop/shop.saga';
import { userSaga } from './user/user.saga';
import { cartSaga } from './cart/cart.saga';

// redux-saga: all([ 多个call函数 ])可直接监听执行大量saga函数( 完成笔记 )
    // 0. all方法
    export default function* rootSaga(){
        yield all([
            call(axiosCollectionsStart),
            call(userSaga),
            call(cartSaga),
        ]);
    }
    // 1. 普通方法
    /*
    export default function* rootSaga(){
        yield axiosCollectionsStart;
        yield xxx;
    }
    */