import React from 'react';
import { CheckoutItemStyledContainer, ImageContainer, SpanStyled, Quantity, Arrow, RemoveButton } from './checkout-item.styles';

import { connect } from 'react-redux';
import { deleteCartItem, addCartItem, lowerCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, deleteCartItem, addCartItem, lowerCartItem }) =>{
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <CheckoutItemStyledContainer>
            <ImageContainer>
                <img src={imageUrl} alt=""/>
            </ImageContainer>
            <SpanStyled >{name}</SpanStyled>
            <Quantity>
                <Arrow onClick={ ()=>lowerCartItem(cartItem) } >&#10094;</Arrow>
                    <span className="value">
                        {quantity}
                    </span>
                <Arrow onClick={ ()=>addCartItem(cartItem) } >&#10095;</Arrow>
            </Quantity>
            <SpanStyled>￥{price}</SpanStyled>
            <RemoveButton onClick={ ()=>deleteCartItem(cartItem) }>
                &#10006;
            </RemoveButton>
        </CheckoutItemStyledContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem)),
    addCartItem: cartItem => dispatch(addCartItem(cartItem)),
    lowerCartItem: cartItem => dispatch(lowerCartItem(cartItem)),
});

export default connect(null,mapDispatchToProps)(CheckoutItem) ;