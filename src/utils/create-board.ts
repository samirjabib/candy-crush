import { candies } from "./candy-data";


export const createBoard = (boardSize : number = 8) =>
     Array(boardSize * boardSize)
        .fill(null).map( () => candies[Math.floor(Math.random() * candies.length)]);

