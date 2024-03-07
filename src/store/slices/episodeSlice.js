import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    trigger: null,
    Error: null,
    getIds: null
}

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data
        } catch (e) {
            const error = e.response.data
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        trigger: state => {
            state.trigger = !state.trigger
        },
        getIds: state => {
            state.results.characters.map(character => character.split('/').slice(-1)[0]).join(',');
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.episodes = action.payload.results
                state.prevPage = action.payload.info.prev
                state.nextPage = action.payload.info.next
            })

            .addMatcher(isFulfilled(getAll), state => {
                state.Error = null
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.Error = action.payload.error
            })
    }
})

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions,
    getAll
}

export {
    episodeReducer,
    episodeActions
}