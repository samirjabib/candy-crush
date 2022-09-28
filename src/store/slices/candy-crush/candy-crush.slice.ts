import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moveBelowReducer } from "../../reducers/move-below";


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
        moveBelow: moveBelowReducer,
    },
})

export const { updateBoard, moveBelow } = candyCrushSlice.actions