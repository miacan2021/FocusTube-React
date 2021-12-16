import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'


import favReducer from './fav'


const reducer = combineReducers({
    favList: favReducer,
})

const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});
export default store
