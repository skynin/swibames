import assert from 'assert';
import Board from '../../src/models/Board'
import Game from '../../src/models/Game'
import Cell from '../../src/models/Cell'
import Chip from '../../src/models/Chip'

describe('base models', function () {
  function createFooGame(s: string = 'tic-tac-toe') : Game {
    return new Game(s)
  }

  function createFooBoard(game: Game) : Board {
    const cells: Cell[] = [new Cell('11'), new Cell('12'), new Cell('13'), 
    new Cell('21'), new Cell('22'), new Cell('23'), 
    new Cell('31'), new Cell('32'), new Cell('33')]
  
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

  describe('new Game()', function () {

    const game = createFooGame()

    it('should Game.id tic-tac-toe', function () {
      assert.equal(game.id, 'tic-tac-toe');
    });

    it('first steps tic-tac-toe', function () {

      const board = createFooBoard(game)
      const chipX = new Chip('x1', 'X');
      const cell = board.getCell(1,2);

      assert.equal(chipX.canMove(cell), true);
      chipX.move(cell)
      assert.equal(chipX.cell.id, '12');
      assert.equal(cell.chip.id, 'x1');

      const chipO = new Chip('o2', 'O');
      assert.equal(chipO.canMove(cell), false);
      const cellO = board.getCell(1,1);

      chipO.move(cellO)
      assert.equal(chipO.cell.id, '11');
      assert.equal(cellO.chip.id, 'o2');

    });
  });
});
