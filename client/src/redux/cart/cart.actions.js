import CartActionsType from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionsType.TOGGLE_CART_HIDDEN,
});

export const addCartItem = items => ({
    type: CartActionsType.ADD_CART_ITEMS,
    payload: items,
});

export const lowerCartItem = items => ({
    type: CartActionsType.LOWER_CART_ITEMS,
    payload:items,
});

export const deleteCartItem = item => ({
    type: CartActionsType.DELETE_CART_ITEM,
    payload: item,
});

export const clearCartItem = () => ({
    type: CartActionsType.CLEAR_CART_ITEM,
});

export const getCartItemStart = items => ({
    type: CartActionsType.GET_CART_ITEM_START,
    payload: items,
});

export const getCartItemSuccess = items => ({
    type: CartActionsType.GET_CART_ITEM_SUCCESS,
    payload: items
});

export const getCartItemFailure = error => ({
    type: CartActionsType.GET_CART_ITEM_FAILURE,
    payload: error
});

export const pushCartItemStart = () => ({
    type: CartActionsType.PUSH_CART_ITEM_START
});

export const pushCartItemSuccess = () => ({
    type: CartActionsType.PUSH_CART_ITEM_SUCCESS
});

export const pushCartItemFailure = error => ({
    type: CartActionsType.PUSH_CART_ITEM_FAILURE,
    payload: error,
});