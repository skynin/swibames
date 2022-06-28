import React, { FC, useState } from 'react';
import {GridAreaProps} from './PropTypes'
import { pageStore } from '../pages/PageStore';

const LeftSide : FC<GridAreaProps> =  ({gridArea}) => {

  let [key] = useState<number>(1)

  return (
    <div>
      {pageStore.current.leftSideNodes.map((fc) => React.createElement(fc, {key: key++}))}
    </div>
  )
}

export default LeftSide;