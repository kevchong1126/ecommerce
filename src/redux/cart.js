import { createSlice } from "@reduxjs/toolkit"

const state = [];

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: state,
    reducers: {
        add : (state, action) => {
            const find = state.find( el => el.id === action.payload.id);

            if (find){
                find.amount = find.amount + 1
                
            }else{
                state.push(action.payload)
            }
            
            
        },
        remove : (state, action) => {
            const find = state.filter(el => el.id !== action.payload);

            state = find

            return state
        },
        subtract : (state, action) => {
            const find = state.find(el => el.id === action.payload);

            find.amount = find.amount - 1
        },
        increase : (state, action) => {
            const find = state.find(el => el.id === action.payload);

            find.amount = find.amount + 1
        }
    }
})

export const { add, remove, subtract, increase } = cartSlice.actions;
export default cartSlice.reducer;
