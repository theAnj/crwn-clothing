import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../redux/user/user_reducer';
import CartReducer from '../redux/cart/cart_reducer';
import directoryReducer from './directory/directory_reducer';
import shopReducer from './shop/shop_reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers ({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig , rootReducer);

