import React from 'react';
import './custom-modal.style.scss';

import Modal from 'react-modal'; // 弹窗必备导入

import {connect} from 'react-redux';
import { handleCloseModal,handleOpenModal } from '../../redux/modal/modal.actions';

// 锁定显示的父类标签(必备)
var appElement = document.querySelector('body');
Modal.setAppElement(appElement);

class CustomModal extends React.Component {

    render(){
        const { handleCloseModal,showModal,text } = this.props;
        return(
            <Modal 
            contentLabel="onRequestClose Example" // 弹窗说明
            isOpen={showModal} // 布尔函数决定是否开启弹窗
            onRequestClose={handleCloseModal} // 关闭弹窗函数用于初始化布尔值
            closeTimeoutMS={0} // 弹窗打开时等待时间

            className="Modal" // 自定弹窗本身css名称,默认css名称.ReactModal__Content
            overlayClassName="Overlay" // 自定弹窗背景css名称,默认css名称.ReactModal__Overlay 

            // onAfterOpen = {在弹窗打开后将运行的函数} 
            // onAfterClose = {在弹窗关闭后将运行的函数}
            >
                <div className="modal-title">
                    <button className="modal-btn" onClick={handleCloseModal}>
                        X
                    </button>
                </div>
                <div className="modal-content">
                    <p>
                        { text }
                    </p>
                </div>
            </Modal>
        );
    };

}
const mapStateToProps = ({ modal: { showModal,text } }) => ({
    showModal,
    text,
});

const mapDispatchToProps = dispatch => ({
    handleOpenModal: text => dispatch(handleOpenModal(text)),
    handleCloseModal: () => dispatch(handleCloseModal()),
});

export default connect(mapStateToProps,mapDispatchToProps)(CustomModal) ;