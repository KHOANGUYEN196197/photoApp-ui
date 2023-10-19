import { createSlice } from "@reduxjs/toolkit";
import photos from "../../constants/photoList";

const photoSlice = createSlice({
    name: 'photos',
    initialState: photos,
    reducers: {
        listPhoto(state, action) {
            //logic
        },
        addPhoto(state, action) {
            state.push(action.payload)
        },
        updatePhoto(state, action) {
            //logic
        },
        deletePhoto(state, action) {
            //logic
        }

    },
});
const { actions, reducer } = photoSlice;
export const { addPhoto, listPhoto, updatePhoto, deletePhoto } = actions;
export default reducer;
