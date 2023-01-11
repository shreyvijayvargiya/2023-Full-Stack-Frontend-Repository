import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { userReducer } from './reducer/reducer';

const persistConfig  = {
    storage, 
    key: "root"
};

const reducers = combineReducers({ userReducer: userReducer })
const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers =(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);


module.exports = { store, persistor };