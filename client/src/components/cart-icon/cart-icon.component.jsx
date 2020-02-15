import React from 'react';
import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden,itemCount }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden} >
            <CartIconSvg className="shopping-icon" />
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    );
}
// 使用reduce函数来计算购物车商品数量
const mapStateToProps = state => ({
    // select普通使用法(完成笔记)
    itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch( toggleCartHidden() ),
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);