/**
 * 0. 构建reducer默认写法( 完成笔记 )
 */
import { UserActionTypes } from './user.types';

// 初始化state
const INITIAL_STATE = {
    currentUser: null,
    error: null,
}

// 接受处理action值改变state 
    // 0. 根据action.type选择处理方法,方法执行使用action.payload,处理后返回改进的state
        // a) action.type验证类型
        // b) action.payload传输的数据,可以是对象,函数,数字,字符串,等数据类型。
    // 1. 都不符合则返回默认state
const userReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload,
            }
        case UserActionTypes.GOOGLE_SIGN_IN_START:
            return{
                ...state,
            }
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return{
                ...state,
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null,
            }
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                error: action.payload,
            }
        case UserActionTypes.CHECK_USER_SESSION:
            return{
                ...state,
            }
        case UserActionTypes.SIGN_OUT_START:
            return{
                ...state,
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: null,
            }
        case UserActionTypes.SIGN_UP_START:
            return{
                ...state,
            }
        case UserActionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default userReducer;