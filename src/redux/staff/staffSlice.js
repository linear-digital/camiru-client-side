import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staffValues: {
        status: "Active",
        shifting: "Morning",
        schedule: [],
        profilePic: '/default-profile.png',
        dob: new Date().toISOString(),
    },
    staff: {},
};

export const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        setStaffvalues: (state, action) => {
            state.staffValues = { ...state.staffValues, ...action.payload };
        },
        setStaff: (state, action) => {
            state.staff = action.payload;
        },
    },
});

export const { setStaffvalues, setStaff } = staffSlice.actions;
const staffReducer = staffSlice.reducer;
export default staffReducer;
