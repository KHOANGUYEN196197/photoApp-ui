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
            const newPhoto = action.payload;
            const index = state.findIndex((photo) => +photo.id === +newPhoto.id);
            state[index] = newPhoto;
        },
        deletePhoto(state, action) {
            const photoId = action.payload
            return (state = state.filter((photo) => photo.id !== photoId));
        }

    },
});
const { actions, reducer } = photoSlice;
export const { addPhoto, listPhoto, updatePhoto, deletePhoto } = actions;
export default reducer;
