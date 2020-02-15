import React from 'react';
import "./cart-item.styles.scss";

// 接受单个对象的，解构方法，真的骚(完成笔记)
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name}/>
        <div className="item-details">
            <span className="name">
                {name}
            </span>
            <span className="price">
                {quantity} * ￥{price}
            </span>
        </div>
    </div>
);

export default CartItem;