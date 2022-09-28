
import { useAppSelector } from "../hooks/use-app-selector";
import Tile from "./tile";



const Board = () => {

    const board: string[] = useAppSelector( ( { candyCrush: { board }}) => board);
    const boardSize: number = useAppSelector(
        ({ candyCrush: { boardSize} }) => boardSize 
    );
    
    return (
        <div className="flex flex-wrap rounded-lg justify-center" style={{
            width:`${ 6.25* boardSize}rem`
        }}>
            {
                board.map((candy: string, index:number) => (
                    <Tile candy={candy} key={index} candyId={index}/>
                )) 
            }
        </div>
    );
};

export default Board;