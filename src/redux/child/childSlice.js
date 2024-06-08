// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";


export const childSlice = createSlice({
    name: "child",
    initialState: {
        childFeilds: {
            status: "active",
            rotation: "morning",
            contacts: [{
                firstName: "First Name",
                lastName: "",
                email: "",
                home: "",
                other: "",
                guardianType: "parent",
            }]
        },
        contact: {
            firstName: "First Name",
            lastName: "",
            email: "",
            home: "",
            other: "",
            guardianType: "parent",
        },
        profile: null
    },
    reducers: {

        setContact: (state, action) => {
            state.contact = action.payload;
        },
        setProfilePic: (state, action) => {
            state.profile = action.payload;
        },
        setChildFeilds: (state, action) => {
            state.childFeilds = action.payload;
        },
    },
});

export const { setContact, setProfilePic, setChildFeilds } = childSlice.actions;
const childReducer = childSlice.reducer
export default childReducer;