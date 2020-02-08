// 容器模式: 实战2,分离购物车高阶组件组件( 非常重要 - 完成笔记 )
    // 0. 感悟: 可以理解只是不在同一个文件,其实操作大多相同,参数也与组件共通
    // 1. 这种模式真的让组件更加的简洁化, 我喜欢
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { compose } from 'redux'; // 核心函数: 处理多高阶组件以及传递参数必备

import CartDropdown from './cart-dropdown.component'; // 加工主角

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors'; // 所需redux数据

import { withRouter } from 'react-router-dom'; // 路由高阶组件

const mapStateToProps = createStructuredSelector({ // 传递参数给主角
    cartItems: selectCartItems,
});
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const CartDropdownContainer = compose(
    withRouter,
    connect(mapStateToProps,mapDispatchToProps),
)( CartDropdown );

export default CartDropdownContainer;