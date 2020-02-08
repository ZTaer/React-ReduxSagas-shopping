import { all, put, call, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearCartItem } from './cart.actions';

export function* clearCartItemStart() {
    yield put( clearCartItem() );
}

export function* onClearCartItemStart() {
    yield takeLatest( UserActionTypes.SIGN_OUT_SUCCESS, clearCartItemStart );
}

export function* cartSaga() {
    yield all([
        call(onClearCartItemStart),
    ]);
}