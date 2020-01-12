import React from 'react';
import "./collection-overview.styles.scss";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionShopArray } from '../../redux/shop/shop.selectors';

import CollectionView from "../../components/collection-view/collection-view.component";

const CollectionOverview  = ({ collectionShop }) => {
    return(
        <div className="collection-overview">
            {
                collectionShop.map( ( {id,...otherProps} )=>(
                    <CollectionView key={id} {...otherProps} /> 
                ) )
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collectionShop: selectCollectionShopArray,
});

export default connect(mapStateToProps)(CollectionOverview) ;