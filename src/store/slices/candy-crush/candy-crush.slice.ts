import { createSlice } from "@reduxjs/toolkit";


const initialState : {
    board: string[];
    boardSize: number,
} = {
    board:[],
    boardSize: 8,
}


export  const candyCrushSlice = createSlice( {
    name: "candyCrush",
    initialState,
    reducers:{},
})