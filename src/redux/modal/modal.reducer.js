import ModalTypes from "./modal.types";

const INITIAL_STATE = {
    showModal: false, // 由他控制弹窗的打开于关闭
    text: '后加内容，方便调用, 可选',
}

const modalReducer = ( state=INITIAL_STATE, action ) => {
    switch(action.type){
        case ModalTypes.HandleOpenModal:
            return {
                ...state,
                showModal: true,
                text: action.payload,
            }
        case ModalTypes.HandleCloseModal:
            return {
                ...state,
                showModal: false,
            } 
        default:
            return state;
    }
}

export default modalReducer;