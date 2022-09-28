import { useEffect } from "react";

import Board from "./components/board";
import { useAppDispatch } from "./hooks/use-app-dispatch";
import { useAppSelector } from "./hooks/use-app-selector"
import { moveBelow, updateBoard } from "./store/slices/candy-crush/candy-crush.slice";
import { createBoard } from "./utils/create-board";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "./utils/formulas";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/move-check-logic";

function App() {

  const dispatch = useAppDispatch();


  const board = useAppSelector(({candyCrush: { board }}) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize }}) => boardSize
  );

  useEffect( () => {
    dispatch( updateBoard(createBoard(boardSize)));
  }, [dispatch, boardSize])

  useEffect( () => {
    const timeout = setTimeout( () => {
      const newBoard = [...board];

      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));

      checkForRowOfFour(newBoard,boardSize, generateInvalidMoves(boardSize, true));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize, true));

      dispatch(updateBoard(newBoard))
      dispatch(moveBelow());
      
    }, 150);
    return () => clearInterval(timeout)
    
  },[board, dispatch, boardSize])



  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className=" text-7xl text-purple-200 font-black absolute top-[10%]">Candy Crush</h1>
      <Board/>
    </div>
  )
}



export default App
