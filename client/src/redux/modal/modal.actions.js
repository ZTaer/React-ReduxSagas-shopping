import ModalTypes from './modal.types';

export const handleOpenModal = text => ({
    type: ModalTypes.HandleOpenModal,
    payload: text,
});

export const handleCloseModal = () => ({
    type: ModalTypes.HandleCloseModal,
});