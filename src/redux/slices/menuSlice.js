import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    move: 0,
    scrollTo: null
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMove: (state, action) => {
            state.move = action.payload            
        },
        setScrollTo:  (state, action) => {
            state.scrollTo = action.payload            
        },
    }
});

export const {setMove, setScrollTo} = menuSlice.actions;
export default menuSlice.reducer;