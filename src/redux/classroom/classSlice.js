// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
    name: "class",
    initialState: {
        classrooms: [],
    },
    reducers: {

        setClassRooms: (state, action) => {
            state.classrooms = action.payload;
        },
    },
});

export const { setClassRooms } = classSlice.actions;
const classReducer = classSlice.reducer
export default classReducer;