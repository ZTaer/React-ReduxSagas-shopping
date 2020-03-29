import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionShopArray } from '../../redux/shop/shop.selectors';

import CollectionView from "../../components/collection-view/collection-view.component";

const CollectionOverview  = ({ collectionShop }) => {
    return(
        <div className="collection-overview">
            {
                collectionShop ? collectionShop.map( ( {id,...otherProps} )=>(
                    <CollectionView key={id} {...otherProps} /> 
                ) ) :
                null
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collectionShop: selectCollectionShopArray,
});

export default connect(mapStateToProps)(CollectionOverview) ;