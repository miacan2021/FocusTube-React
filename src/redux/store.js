import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import favReducer from './fav'


const reducer = combineReducers({
    favList: favReducer
})

const store = configureStore({ reducer })

export default store
