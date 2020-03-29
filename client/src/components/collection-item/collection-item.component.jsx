import React from 'react';

import CustomButtonExp from '../custom-button-exp/custom-button-exp.component';

import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions.js';

import { CollectionItemStyledContainer, Image,  CollectionFooter, Name, Price } from './collection-item.styles';

const CollectionItem = ({ item, addCartItem }) => {
    const {name, imageUrl, price } = item;
    return(
        <CollectionItemStyledContainer>
            <Image backgroundImg={imageUrl} >
                <CustomButtonExp 
                    className="collection-item-btn" 
                    isCollectionItemBtnStyles 
                    onClick={ ()=>addCartItem(item) } 
                >
                    加入购物车
                </CustomButtonExp>
            </Image>
            <CollectionFooter>
                <Name>{name}</Name>
                <Price>{price}￥</Price>
            </CollectionFooter>
        </CollectionItemStyledContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addCartItem: items => dispatch(addCartItem(items)),
});

export default connect(null,mapDispatchToProps)(CollectionItem);