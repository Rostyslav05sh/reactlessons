import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {characterService} from "../../services";


const initialState = {
    characters: [],
    error: null
}

const getById = createAsyncThunk(
    'getById/characterSlice',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getById(ids);
            return data
        } catch (e) {
            const error = e.response.data
            return thunkAPI.rejectWithValue(error)        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getById.fulfilled, (state, action) => {
                state.characters = action.payload;
            })

            .addMatcher(isFulfilled(getById), state => {
                state.error = null
        })
            .addMatcher(isRejected(getById), (state, action) => {
                // state.error = action.payload.error
        })
    }
})

const {reducer: characterReducer, actions} = characterSlice;

const characterActions = {
    ...actions,
    getById
}

export {
    characterReducer,
    characterActions
}