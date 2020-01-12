import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser,
);

export const selectUserImg = createSelector(
    [selectUserCurrentUser],
    currentUser => {
        const defaultImg = 'https://svgshare.com/i/CUz.svg';
        return currentUser ?
        ( currentUser.photoURL ? currentUser.photoURL : defaultImg ) :
        defaultImg
    },
);

export const selectUserEmail = createSelector(
    [selectUserCurrentUser],
    currentUser => currentUser ? currentUser.email : '请登录!!',
);