import CartActionType from './cart_type';
import addItemsToCart from './cart_utils';

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
               CartItems: addItemsToCart(state.CartItems, action.payload)
            };

        default:
            return state;
    }
}

export default CartReducer;