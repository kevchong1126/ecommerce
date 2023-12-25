import { createSlice } from "@reduxjs/toolkit";

const openCartSlice = createSlice({
    name: "openCartSlice",
    initialState: false,
    reducers: {
        open: (state) => {
            return true
        },
        close: (state) => {
            return false
        }
    }
})

export const { open, close } = openCartSlice.actions;
export default openCartSlice.reducer; 