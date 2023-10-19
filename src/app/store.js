import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoReducer from '../features/Photo/photoSlice'


const rootReducer = combineReducers({
    photos: photoReducer,
})

const store = configureStore({
    reducer: rootReducer,
})
export default store