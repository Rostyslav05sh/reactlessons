import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: null,
    brand: null,
    price: null,
    year: null
}
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {id, brand, price ,year } = action.payload
            state.id = id
            state.brand = brand
            state.price = price
            state.year = year
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