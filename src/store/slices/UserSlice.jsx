import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carName : "",
    // displayCarItems :  "",
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
        // DisplayCarItemsOnTheScreen : (state, action) => {
        //     state.displayCarItems = action.payload;
        // },
        DisplayCarOnTheScreen : (state, action) =>{
            state.displayCarItems = action.payload;
        }
    }

});

export const { SearchCarByName, TotalCarsResultsAfterSearch , DisplayCarOnTheScreen } = UserSlice.actions;

export default UserSlice.reducer;