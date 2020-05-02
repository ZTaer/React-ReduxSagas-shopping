/** 用户登陆/用户退出redux-saga实战 - 标准xx.saga.js写法( 完成笔记 ) */

import { takeLatest,put,all,call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { auth,googleProvider,createUserProfileDocument,getCurrentUser } from '../../firebase/firebase.config';
import { signInSuccess,signInFailure,signOutSuccess,signOutFailure,signUpSuccess,signUpFailure } from './user.actions';
import { getCartItemStart } from '../cart/cart.actions';

// 加工处理获取的账户信息
export function* unsubscribeFromAuth( user ){
    try{
        const userRef = yield createUserProfileDocument(user);
        const userRefSnapshot = yield userRef.get();
        yield put( 
            signInSuccess({ id: userRefSnapshot.id, ...userRefSnapshot.data() }) 
        );
        yield put( getCartItemStart({ ...userRefSnapshot.data() }) );
    }
    catch(error){
        yield put( signInFailure(error) );
    }
}

export function* googleSignIn(){
    try{
       yield googleProvider.setCustomParameters({ prompt: 'select_account' });
       const {user} = yield auth.signInWithPopup(googleProvider);
       yield unsubscribeFromAuth( user );
    }
    catch(error){
       yield put( signInFailure(error) );
    }
}

// redux-saga: saga函数继承action的所有传输的参数/action传输数据到saga( 完成笔记 )
    // 0. 简单说: saga函数可以读取对应的action参数,type和payload
export function* emailSignIn(data){
    const { payload:{ email, password } } = data;
    try{
        const { user } = yield auth.signInWithEmailAndPassword( email, password );
        yield unsubscribeFromAuth(user);
    }
    catch(error){
        yield put( signInFailure(error) );
    }
}

export function* checkUserSessiosStart(){
    try{
        const userAuth = yield getCurrentUser();
        if( !userAuth ) return; // 当userAuth为空时,代表最近当前本地没有用户登陆
        yield unsubscribeFromAuth( userAuth );
    }
    catch(error){
        yield put( signInFailure(error) );
    }
}

export function* signOut() {
    try{
        yield auth.signOut();
        yield put( signOutSuccess() );
    }
    catch(error){
        yield put( signOutFailure(error) );   
    }
}

export function* signUpStart(data) {
    const { payload: { email, password, displayName } } = data;
    try{
        let createUser = yield auth.createUserWithEmailAndPassword( email, password );
        const userRef = yield createUserProfileDocument( createUser.user, {displayName} );
        yield put( signUpSuccess() );
        yield alert('注册成功');

        // 注册成功自动登陆
        const userRefSnapshot = yield userRef.get();
        yield put( 
            signInSuccess({ id: userRefSnapshot.id, ...userRefSnapshot.data() }) 
        );
    }
    catch(error){
        yield alert(error.message);
        yield put( signUpFailure(error) );
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest( UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn );
}

export function* onEmailSignInStart(){
    yield takeLatest( UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn );
}

export function* onCheckUserSession(){
    yield takeLatest( UserActionTypes.CHECK_USER_SESSION, checkUserSessiosStart );
}

export function* onSignOutStart(){
    yield takeLatest( UserActionTypes.SIGN_OUT_START, signOut );
}

export function* onSignUpStart() {
    yield takeLatest( UserActionTypes.SIGN_UP_START, signUpStart );
}

// 此耐每一个xxx.saga.js必备,方便在root-saga.js登记( 完成笔记 )
export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
    ]);
}