import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../reducers/userSlice";
import { countSlice } from "../reducers/countSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        count: countSlice.reducer
    }
})