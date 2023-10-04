import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carName : ""
};

const UserSlice = createSlice({
    name : 'FindCar',
    initialState,

    reducers: {
        SearchCarByName : (state, action) => {
            state.carName = action.payload;
        }
    }
});

export const {SearchCarByName } = UserSlice.actions;

export default UserSlice.reducer;