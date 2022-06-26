import { FC, useMemo } from 'react';
import {GridAreaProps} from './PropTypes'
import {testBoard} from '../games/index'
import BoardView from '../games/BoardView';
import { useState } from 'react';

const MainSection : FC<GridAreaProps> =  ({gridArea}) => {  

  const [board] = useState<BoardView>(() => {
    const board = new BoardView()
    board.init(testBoard())
    return board;
  })

  const BoardDraw = useMemo(() => board.drawFC(),[board.board?.id])

  return (
    <div>
      MainSection
      <BoardDraw/>
    </div>
  )
}

export default MainSection;