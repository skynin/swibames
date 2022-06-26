import Board from '../../../core/src/models/Board'
import {createFooGame, createFooBoard} from '../../../core/src/utils/DraftTest'

function testBoard() : Board {
  return createFooBoard(createFooGame())
}

export {testBoard}