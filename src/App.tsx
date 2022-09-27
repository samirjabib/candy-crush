import { useEffect } from "react";
import { useAppDispatch } from "./hooks/use-app-dispatch";
import { useAppSelector } from "./hooks/use-app-selector"
import { updateBoard } from "./store/slices/candy-crush/candy-crush.slice";
import { createBoard } from "./utils/create-board";

function App() {

  const dispatch = useAppDispatch();


  const board = useAppSelector(({candyCrush: { board }}) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize }}) => boardSize
  );

  useEffect( () => {
    dispatch( updateBoard(createBoard(boardSize)));
  }, [])



  return (
    <div className="App">
    </div>
  )
}

export default App
