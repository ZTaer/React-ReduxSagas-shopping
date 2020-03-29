import React from 'react';
import { CartDropdownStyledContainer, CartItems, CartItemsAlt, CustomButtonExpStyled } from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <CartDropdownStyledContainer>
            <CartItems>
                {
                    cartItems.length ? 
                    cartItems.map( cur => (<CartItem key={cur.id} item={cur} />) ) :
                    (<CartItemsAlt >你购物车是空的!</CartItemsAlt>)
                }
            </CartItems>
            <CustomButtonExpStyled 
            onClick={ ()=>{
                toggleCartHidden();
                history.push('/checkout');
            } } 
            isCartDropdownBtnStyles
            >
                结算
            </CustomButtonExpStyled>
        </CartDropdownStyledContainer>
    );
}

export default CartDropdown;