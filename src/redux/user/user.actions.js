// 4. 构建actions写法
import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = data => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload:data,
});

export const signInSuccess = data => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: data,
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

export const signUpStart = data => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: data,
});

export const signUpSuccess = data => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: data,
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
});