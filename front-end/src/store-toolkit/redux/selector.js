import { createSelector } from "@reduxjs/toolkit";


const user = (state) => state.user;
export const getUser = createSelector([user], (user) => {
    return {
        user: user
    }
})

const count = (state) => state.count;
export const getCount = createSelector([count], (count) => {
    return {
        count: count
    }
})