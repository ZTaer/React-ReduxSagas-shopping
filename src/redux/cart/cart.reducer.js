import CartActionsType from  "./cart.types";
import { addItemToCart,deleteCartItem,lowerCartItem } from "./cart.utility";

const INITIAL_STATE = {
    hidden: false,
    cartItems: [],
}

const cartReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){
        case CartActionsType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartActionsType.ADD_CART_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart( state.cartItems, action.payload ),
            }
        case CartActionsType.LOWER_CART_ITEMS:
            return {
                ...state,
                cartItems: lowerCartItem( state.cartItems, action.payload ),
            }
        case CartActionsType.DELETE_CART_ITEM:
            return {
                ...state,
                cartItems: deleteCartItem( state.cartItems, action.payload ),
            }
        default:
            return state;
    }
}

export default cartReducer;