import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment: (state, action) => state + 1,
        decrement: (state, action) => state - 1
    }
})