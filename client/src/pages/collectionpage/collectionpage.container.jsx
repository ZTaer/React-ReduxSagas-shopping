import { connect } from 'react-redux';
import { compose } from 'redux';

import Collectionpage from './collectionpage.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsLoaded,
});

const CollectionpageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)( Collectionpage );

export default CollectionpageContainer;