// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        token: Cookie.get('token-camiru2'),
        loading: false
    },
    reducers: {

        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setCurrentUser, setLoading } = userSlice.actions;
const userReducer = userSlice.reducer
export default userReducer;