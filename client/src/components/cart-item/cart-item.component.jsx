import React from 'react';
import { CartItemStyledContainer, ItemDetails, Name } from './cart-item.styles';

// 接受单个对象的，解构方法，真的骚(完成笔记)
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <CartItemStyledContainer>
        <img src={imageUrl} alt={name}/>
        <ItemDetails>
            <Name>
                {name}
            </Name>
            <span className="price">
                {quantity} * ￥{price}
            </span>
        </ItemDetails>
    </CartItemStyledContainer>
);

export default React.memo(CartItem);