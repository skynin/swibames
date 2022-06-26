import Board from "./Board";
import Chip from "./Chip";

export default class Cell {

  public chip: Chip | null = null
  public board: Board | null = null

  constructor(public id: string) {}

  setBoard(board: Board) {this.board = board}

  putChip(chip: Chip) {
    this.chip = chip
    chip.cell = this
  }

  clearChip(target: Cell | null = null) {
    this.chip = null
  }
}