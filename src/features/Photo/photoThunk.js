import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { photoApi } from "../../config/apiConfig";
import { array } from "yup";
import { invalid } from "moment";

export const getListPhoto = createAsyncThunk(
    'getListPhoto',
    async (data) => {
        try {
            const res = await axios.get(photoApi);
            return res.data;
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

export const postPhoto = createAsyncThunk(
    'postPhoto',
    async (data, { getState, dispatch }) => {
        try {
            const res = await axios.post(photoApi, data);
            if (res.status === 201) {
                dispatch(getListPhoto)
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

export const deletePhotoById = createAsyncThunk(
    'deletePhotoById',
    async (id) => {
        try {
            const res = await axios.delete(`${photoApi}${id}`);
            return res.data.id
        } catch (error) {
            throw new Error(error.message)
        }
    }
)