import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moveBelowReducer } from "../../reducers/move-below";
import { dragEndReducer } from "../../reducers/drag-end";

const initialState: {
    board: string[];
    boardSize: number;
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined;
  } = {
    board: [],
    boardSize: 8,
    squareBeingDragged: undefined,
    squareBeingReplaced: undefined,
  };


export const candyCrushSlice = createSlice( {
    name: "candyCrush",
    initialState,
    reducers: {
      updateBoard: (state, action: PayloadAction<string[]>) => {
        state.board = action.payload;
      },
      dragStart: (state, action: PayloadAction<any>) => {
        state.squareBeingDragged = action.payload;
      },
      dragDrop: (state, action: PayloadAction<any>) => {
        state.squareBeingReplaced = action.payload;
      },
      dragEnd: dragEndReducer,
      moveBelow: moveBelowReducer,
    },
})

export const { updateBoard, moveBelow, dragDrop, dragEnd, dragStart } =
  candyCrushSlice.actions;