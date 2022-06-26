import React, { useState } from 'react'
import { Grid, AreasType } from "grommet"
import Board from '../../../core/src/models/Board'
import CellView from './CellView'

export default class BoardView {
  public board: Board | null = null
  public cells: CellView[] = []
  public sizeBoard: number = 3

  init(board: Board) {

    this.board = board

    this.cells = []
    let idView = 100
    for(let cell of board.cells) {
      this.cells.push(new CellView(idView, cell))
      ++idView
    }
  }

  drawFC() : React.FC {

    if (this.board === null) return () => (<div></div>)

    const rows=['auto', 'auto', 'auto']
    const columns=['auto', 'auto', 'auto']
    const areas = squareArea(this.sizeBoard)
  
    return () => {

      const cellViews = this.cells

      return (
        <Grid rows={rows} columns={columns} gap="xxsmall" areas={areas}>          
          {cellViews.map((c: CellView) =>
            React.createElement(c.drawFC(), {key: c.reactKey})            
          )}          
        </Grid>
      )
    }
  }
}

// * * * utils function
var cacheArea: {[key: number]: AreasType} = {}

export function squareArea(sizeBoard: number): AreasType {

  if (cacheArea[sizeBoard]) return cacheArea[sizeBoard];

  let arrFill: number[] = []
  for (let iii=1; iii <= sizeBoard; ++iii) {
    arrFill.push(iii)
  }

  const areas: AreasType = arrFill.map(eachColumn => {
    return arrFill.map((eachRow) => {
      return { name: '' + eachColumn + eachRow, start: [eachColumn-1, eachRow-1], end: [eachColumn-1, eachRow-1] }
    })
  }).flat()

  return cacheArea[sizeBoard]=areas
}
