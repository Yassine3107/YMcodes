import { configureStore } from "@reduxjs/toolkit";
import loginStatusSlice from "./slices/loginStatusSlice";
import menuSlice from "./slices/menuSlice";



export const store = configureStore({
    reducer: {
        loginStatus: loginStatusSlice,
        menu: menuSlice
    }
})

export type QuoteState = ReturnType<typeof store.getState>;
