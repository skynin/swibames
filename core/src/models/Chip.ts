import Cell from "./Cell";

export default class Chip {

  public cell: Cell | null = null  

  constructor(public id: string, public name: string) {}

  canMove(target: Cell) {
    return target.chip === null;
  }

  move(target: Cell) {
    if (this.cell) this.cell.clearChip(target);

    target.putChip(this)
  }
}
