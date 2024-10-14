// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: "socket",
    initialState: {
        settings: {},
        width: window.innerWidth
    },
    reducers: {
        setSettings: (state, action) => {
            state.settings = action.payload;
        },
        setBrowserWidth: (state, action) => {
            state.width = action.payload;
        }
    },
});

export const { setSettings, setBrowserWidth } = settingSlice.actions;
const settingReducer = settingSlice.reducer
export default settingReducer;