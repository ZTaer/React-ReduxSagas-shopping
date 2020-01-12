import React from 'react';
import "./checkout-item.styles.scss";

import { connect } from 'react-redux';
import { deleteCartItem, addCartItem, lowerCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, deleteCartItem, addCartItem, lowerCartItem }) =>{
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={ ()=>lowerCartItem(cartItem) } className="arrow">&#10094;</div>
                    <span className="value">
                        {quantity}
                    </span>
                <div onClick={ ()=>addCartItem(cartItem) } className="arrow">&#10095;</div>
            </span>
            <span className="price">￥{price}</span>
            <span onClick={ ()=>deleteCartItem(cartItem) } className="remove-button">
                &#10006;
            </span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem)),
    addCartItem: cartItem => dispatch(addCartItem(cartItem)),
    lowerCartItem: cartItem => dispatch(lowerCartItem(cartItem)),
});

export default connect(null,mapDispatchToProps)(CheckoutItem) ;