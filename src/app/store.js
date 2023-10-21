import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoReducer from '../features/Photo/photoSlice'


const rootReducer = combineReducers({
    photoReducer,
})

const store = configureStore({
    reducer: rootReducer,
})
export default store