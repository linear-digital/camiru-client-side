import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staffValues: {
        status: "Active",
        shifting: "Morning",
        schedule: [],
        profilePic: '',
        dob: new Date().toISOString(),
    },
};

export const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        setStaffvalues: (state, action) => {
            state.staffValues = { ...state.staffValues, ...action.payload };
        },
    },
});

export const { setStaffvalues } = staffSlice.actions;
const staffReducer = staffSlice.reducer;
export default staffReducer;
