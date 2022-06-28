import React, { createElement, ReactElement } from 'react'
import { Box } from "grommet"
import Cell from '../../../core/src/models/Cell'
import { BorderType } from 'grommet/utils'

var lastCellViewID = 9999

interface CellViewProps {
  key? :any
  cellView?: CellView
}

export default class CellView {
  public cell: Cell | null = null

  public idView: number = lastCellViewID

  public wait: boolean = false
  public brim: string | null = null
  public effect: string | null = null
  public info: string | null = null 

  constructor(cell: Cell | null = null) {
    this.cell = cell

    this.idView = ++lastCellViewID
  }

  get reactKey() {
    return this.cell?.chip?.id || this.cell?.id || this.idView
  }

  drawFC() : React.FC<CellViewProps> {

    function clickCell(cellView: CellView | undefined) {
      if (!cellView) return;

      // TODO
    }
    
    const thisCell: Cell = this.cell as Cell

    // <div>cell {thisCell.id} {thisCell.chip?.name}</div>
    return ({cellView} : CellViewProps) => {

      let winEffect = ''
      let border: BorderType = 'all'

      return (
        <Box border={border} background={winEffect} align="center" justify="center" onClick={e => clickCell(cellView) }>
          <div>{cellView?.cell?.chip?.name}</div>
        </Box>        
      )
    }
  }

  createElement(props: CellViewProps = {}) : ReactElement<CellViewProps> {
    return React.createElement(this.drawFC(), {key: props.key || this.reactKey, cellView: props.cellView || this})
  }
}