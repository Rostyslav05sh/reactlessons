import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    changeTrigger: null,
    carForUpdate: null
}
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        getAllCars: (state, actions) => {
            state.cars = actions.payload
        },
        changeTrigger: (state) => {
            state.changeTrigger = !state.changeTrigger
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}