import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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
    reducers:{
        updateBoard: ( state, action : PayloadAction<string[]>) => {
            state.board = action.payload;
        },
    },
})

export const { updateBoard } = candyCrushSlice.actions