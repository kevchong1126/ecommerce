import { configureStore } from "@reduxjs/toolkit"
import openCartSlice from "./openCart"
import databaseSlice from "./database"
import cartSlice from './cart'

const store = configureStore({
    reducer: {
        openCartSlice,
        databaseSlice,
        cartSlice
    }
});

export default store