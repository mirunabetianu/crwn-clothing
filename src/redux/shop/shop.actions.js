import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    payload: collectionsMap
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
       
    } 
}