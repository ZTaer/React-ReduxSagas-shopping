import { shopActionTypes } from './shop.types';

export const updateCollections = data => ({
    type: shopActionTypes.UPDATA_COLLECTIONS,
    payload: data,
});