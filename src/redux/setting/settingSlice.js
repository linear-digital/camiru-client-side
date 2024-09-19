// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: "socket",
    initialState: {
        settings: {},
    },
    reducers: {
        setSettings: (state, action) => {
            state.settings = action.payload;
        },
    },
});

export const { setSettings } = settingSlice.actions;
const settingReducer = settingSlice.reducer
export default settingReducer;