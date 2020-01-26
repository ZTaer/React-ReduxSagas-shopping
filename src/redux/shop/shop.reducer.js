import { shopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collectionShop: null,
}

const shopReducer = ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case shopActionTypes.UPDATA_COLLECTIONS:
            return{
                ...state,
                collectionShop: action.payload,
            }

        default:
            return state;
    }
};

export default shopReducer;