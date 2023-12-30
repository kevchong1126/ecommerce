import { createSlice } from "@reduxjs/toolkit";

import json from "../json";

const state = {
    database : json,
    length: json.length,
    filters : {
        "bk"  : false,
        "jordan" : false,
        "nb" : false,
        "nike" : false,
        "nf" : false
    },
    prices : {
        1  : false,
        2 : false,
        3 : false,
        4 : false,
    },
    sort : {
        1  : true,
        2 : false,
        3 : false,
        4 : false,
    },
    query: ""
};

const databaseSlice = createSlice({
    name: "database",
    initialState: state,
    reducers:{
        setFilter : (state, action) => {
            state.filters[action.payload] =  !state.filters[action.payload]
        },
        setPrice : (state, action) => {
            state.prices[action.payload] = !state.prices[action.payload]
        },
        setSort : (state, action) => {
            for (let el in state.sort){
                state.sort[el] = false
            }
            state.sort[action.payload] = true
        },
        setQuery : (state, action) => {
            state.query = action.payload
        },
        setModified : (state, action) => {
            state.modified = action.payload
        },
        setLength : (state, action) => {
            state.length = action.payload
        }
    }
})

export const { setFilter, setPrice, setSort, setLength, setQuery } = databaseSlice.actions;
export default databaseSlice.reducer; 