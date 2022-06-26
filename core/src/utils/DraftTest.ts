import Game from "../models/Game";
import Board from "../models/Board";
import Cell from "../models/Cell";
import Chip from "../models/Chip";

function createFooGame() : Game {
  return new Game('tic-tac-toe')
}

function createFooBoard(game: Game) : Board {
  const cells: Cell[] = [new Cell('11'), new Cell('12'), new Cell('13'), new Cell('21'), new Cell('22'), new Cell('23'), new Cell('31'), new Cell('32'), new Cell('33')]
 
  cells[4].putChip(new Chip('x1','X'))
  cells[0].putChip(new Chip('x2','X'))
  cells[1].putChip(new Chip('o1','O'))
  cells[8].putChip(new Chip('o2','O'))

  return new Board(game.id, game, cells)
}

function jsonBoard(board: Board) : string {

  let result: any = {cells: []}

  result.board = board.id

  for (let cell of board.cells) {
    result.cells.push({
      id: cell.id,
      chip: cell.chip ? (cell.chip.id + ':' + cell.chip.name) : ''
    })
  }

  return JSON.stringify(result)
}

export { jsonBoard,  createFooGame, createFooBoard};

