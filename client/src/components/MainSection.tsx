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

  return (
    <div>
      <p>MainSection</p>
      <p>Top board</p>
      {board.createElement()}
      <p>Bottom board</p>
    </div>
  )
}

export default MainSection;
