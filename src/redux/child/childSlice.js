import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        }],
        isPermitted: false,
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
};

export const childSlice = createSlice({
    name: "child",
    initialState,
    reducers: {
        setContact: (state, action) => {
            state.contact = { ...state.contact, ...action.payload };
        },
        setProfilePic: (state, action) => {
            state.profile = { ...action.payload };
        },
        setChildFeilds: (state, action) => {
            state.childFeilds = { ...state.childFeilds, ...action.payload };
        },
    },
});

export const { setContact, setProfilePic, setChildFeilds } = childSlice.actions;
const childReducer = childSlice.reducer;
export default childReducer;
