import { createSlice } from "@reduxjs/toolkit";

const enum_status = ["ANONYME", "LOGGED_IN"]

const initialState = enum_status[0]

const loginStatusSlice = createSlice({
    name: "loginStatus",
    initialState,
    reducers: {
        updateLoginStatus: (state, action) => {
            state = action.payload
        }
    }
});

export const { updateLoginStatus } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;