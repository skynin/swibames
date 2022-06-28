import React, { ReactElement, useState } from 'react'
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
    for(let cell of board.cells) {
      this.cells.push(new CellView(cell))
    }
  }

  get gridRows(): string[] {
    return ['auto', 'auto', 'auto']
  }

  get gridColumns(): string[] {
    return ['auto', 'auto', 'auto']
  }

  get gridAreas() {
    return squareArea(this.sizeBoard)
  }

  drawFC() : React.FC {

    if (this.board === null) return () => (<div>Empty board</div>)

    const rows = this.gridRows
    const columns = this.gridColumns
    const areas = this.gridAreas
  
    return () => {

      const cellViews = this.cells

      return (
        <Grid rows={rows} columns={columns} gap="xxsmall" areas={areas}>          
          {cellViews.map((c: CellView) => c.createElement())}
        </Grid>
      )
    }
  }

  private cacheElement: React.FC | null = null

  createElement() : ReactElement {
    if (!this.cacheElement) this.cacheElement = this.drawFC()
    return React.createElement(this.board !== null ? this.cacheElement! : this.drawFC(), {})
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
