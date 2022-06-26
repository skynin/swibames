import Cell from "./Cell";
import Game from "./Game";
import Tourney from "./Tourney";

export default class Board {

  public tourney: Tourney | null = null

  constructor(public id: string, public game: Game, public cells: Cell[]) {

    for(let cell of cells) cell.setBoard(this)
  }

  getCell(y: number, x: number) : Cell {

    const cellID: string = '' + y + x;

    for(let cell of this.cells) {
      if (cell.id == cellID) return cell
    }

    throw `Cell ${cellID} not found`
  }
}