import CartActionType from './cart_type';
import {addItemsToCart,removeItemsFromCart} from './cart_utils';

const INITIAL_STATE = {
    hidden : true,
    CartItems: []
};

const CartReducer = (state = INITIAL_STATE , action) => {
    switch (action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            };
        
        case CartActionType.ADD_ITEM:
            return {
                ...state,
               CartItems: addItemsToCart(state.CartItems, action.payload)
            };

        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                CartItems: removeItemsFromCart(state.CartItems, action.payload)
            }

        case CartActionType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                CartItems: state.CartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };

        default:
            return state;
    }
}

export default CartReducer;