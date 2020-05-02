import { all, put, call, takeLatest, delay, select } from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { 
    clearCartItem, 
    getCartItemSuccess, 
    getCartItemFailure,
    pushCartItemStart as pushCartItemStartAction,
    pushCartItemFailure,
    pushCartItemSuccess  
} from './cart.actions';
import CartActionsType from './cart.types';
import { selectUserCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';
import { getUserCartRef } from '../../firebase/firebase.config';
import { arrayToObject } from '../../assets/__OO7EJS.v1.0';

export function* clearCartItemStart() {
    yield put( clearCartItem() );
}

export function* getCartItemStart(data) {
    try{
        const { payload } = data;
        yield payload.cartItems ? put(getCartItemSuccess(payload.cartItems)) : put(getCartItemSuccess(null));
    }catch(err){
        put( getCartItemFailure(err) );
    }
}

export function* pushCartItemStart(){
    const currentUser = yield select( selectUserCurrentUser );
    yield put( pushCartItemStartAction() );
    yield delay(3000); // 防止高频率访问服务器
    if( currentUser ){ // 保证只有用户登陆才联系服务器
        try{
            const cartRef = yield getUserCartRef(currentUser.id); // 获取对应ref，方便操控数据
            const cartItems = yield select( selectCartItems );
            if( cartRef ){
                yield cartRef.update({ cartItems: arrayToObject(cartItems,"id") }); // 购物车数据更新到服务器
            }
            yield put( pushCartItemSuccess() );
        }catch(err){
          yield put( pushCartItemFailure(err) );
        }
    }
}

export function* onClearCartItemStart() {
    yield takeLatest( UserActionTypes.SIGN_OUT_SUCCESS, clearCartItemStart );
}

export function* onGetCartItemStart(){
    yield takeLatest( CartActionsType.GET_CART_ITEM_START, getCartItemStart );
}

export function* onPushCartItemStart(){
    yield takeLatest( [
        CartActionsType.ADD_CART_ITEMS,
        CartActionsType.LOWER_CART_ITEMS,
        CartActionsType.DELETE_CART_ITEM,
        CartActionsType.GET_CART_ITEM_SUCCESS,
    ]
        , pushCartItemStart );
}

export function* cartSaga() {
    yield all([
        call(onClearCartItemStart),
        call(onGetCartItemStart),
        call(onPushCartItemStart),
    ]);
}

/**
 * 购物车逻辑( 等待笔记 )
 */
// 0. 用户登陆
// 1. 获取用户，购物车数据，添加到本地 - ( 用户登陆只执行一次 )
// 2. 检测到购物车数据发生变化，添加到服务器

// 0. 用户没有登陆
// 1. 购物车数据发生变化，不联系服务器
// 2. 当用户单击付款按钮时，跳转到登陆页面
// 3. 用户登陆后，获取服务器上的购物车数据，添加到本地购物车
// 4. 检测到购物车数据发生变化，添加到服务器


