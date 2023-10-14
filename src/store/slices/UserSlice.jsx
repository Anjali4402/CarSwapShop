import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carName : "",
    CurrentPages: 0,
    SearchCarResult : [],
    displayCarItems : []
};

const UserSlice = createSlice({
    name : 'FindCar',
    initialState,

    reducers: {
        SearchCarByName : (state, action) => {
            state.carName = action.payload;
        },
        TotalCarsResultsAfterSearch : (state, action) => {
            state.SearchCarResult = action.payload;
        },
        DisplayCarOnTheScreen : (state, action) =>{
            state.displayCarItems = action.payload;
        },
        SetCurrentPages : (state, action)=>{
            state.CurrentPages = action.payload;
        }
    }

});

export const { SearchCarByName, TotalCarsResultsAfterSearch , DisplayCarOnTheScreen , SetCurrentPages } = UserSlice.actions;

export default UserSlice.reducer;