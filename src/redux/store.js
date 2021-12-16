import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import favReducer from './fav'
import videosReducer from './videos'


const reducer = combineReducers({
    favList: favReducer,
    videos: videosReducer
})

const store = configureStore({ reducer })

export default store
