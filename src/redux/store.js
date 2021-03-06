import { createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

import rootReducer from '../redux/root_reducer';

const middleware = [logger];

export const store = createStore (rootReducer , applyMiddleware(...middleware));

export const persistor = persistStore(store);

// export default {store, persistor };