import { configureStore } from "@reduxjs/toolkit"
import openCartSlice from "./openCart"

const store = configureStore({
    reducer: {
        openCartSlice
    }
});

export default store