import { combineReducers } from 'redux';

import userReducer from '../redux/user/user_reducer';
import CartReducer from '../redux/cart/cart_reducer';

export default combineReducers({
    user: userReducer,
    cart: CartReducer
});

