import CartActionsType from  "./cart.types";
import { addItemToCart,deleteCartItem,lowerCartItem,moreAddItemToCart } from "./cart.utility";


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
        case CartActionsType.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: [],
            }
        case CartActionsType.GET_CART_ITEM_START:
            return {
                ...state,
            }
        case CartActionsType.GET_CART_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case CartActionsType.GET_CART_ITEM_SUCCESS:
            return {
                ...state,
                cartItems: moreAddItemToCart( state.cartItems, action.payload ),
            }
        case CartActionsType.PUSH_CART_ITEM_START:
            return{
                ...state,
            }
        case CartActionsType.PUSH_CART_ITEM_SUCCESS:
            return{
                ...state,
            }
        case CartActionsType.PUSH_CART_ITEM_FAILURE:
            return{
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default cartReducer;