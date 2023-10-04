import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

const store = configureStore({
    reducer : {
        FindCar : UserSlice,
    }
});

export default store;