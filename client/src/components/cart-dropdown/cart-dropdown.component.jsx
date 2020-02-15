import React from 'react';
import "./cart-dropdown.styles.scss";

import CustomButtonExp from '../custom-button-exp/custom-button-exp.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map( cur => (<CartItem key={cur.id} item={cur} />) ) :
                    (<span className="cart-items-alt" >你购物车是空的!</span>)
                }
            </div>
            <CustomButtonExp 
            onClick={ ()=>{
                toggleCartHidden();
                history.push('/checkout');
            } } 
            isCartDropdownBtnStyles
            >
                结算
            </CustomButtonExp>
        </div>
    );
}

export default CartDropdown;