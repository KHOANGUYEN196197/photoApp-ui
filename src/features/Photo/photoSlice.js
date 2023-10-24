import { createSlice } from "@reduxjs/toolkit";
import photos from "../../constants/photoList";
import { deletePhotoById, getListPhoto } from "./photoThunk";

const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [],
        isLoading: false,
    },
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
    extraReducers: (builder) => {
        builder
            //getlist
            .addCase(getListPhoto.fulfilled, (state, action) => {
                console.log('fulfilled');
                state.photos = action.payload;
                state.isLoading = false;

            })
            .addCase(getListPhoto.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getListPhoto.rejected, (state, _) => {
                state.isLoading = false;
                alert('err code')
            })
            //delete
            .addCase(deletePhotoById.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(deletePhotoById.fulfilled, (state, action) => {
                const removeId = action.payload
                state.photos = state.photos.filter((photo) => photo.id !== removeId)
                state.isLoading = false;
            })
            .addCase(deletePhotoById.rejected, (state, _) => {
                state.isLoading = false;
                alert('err code')
            })
    }
});
const { actions, reducer } = photoSlice;
export const { addPhoto, listPhoto, updatePhoto, deletePhoto } = actions;
export default reducer;
