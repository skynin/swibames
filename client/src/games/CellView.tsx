import React from 'react'
import { Box } from "grommet"
import Cell from '../../../core/src/models/Cell'
import { BorderType } from 'grommet/utils'

export default class CellView {
  public cell: Cell | null = null

  public wait: boolean = false
  public brim: string | null = null
  public effect: string | null = null
  public info: string | null = null 

  constructor(public idView: number, cell: Cell | null = null) {
    this.cell = cell
  }

  get reactKey() {
    return this.cell?.chip?.id || this.cell?.id || this.idView
  }

  drawFC() : React.FC {

    function clickCell(e: any) {}
    
    const thisCell: Cell = this.cell as Cell

    // <div>cell {thisCell.id} {thisCell.chip?.name}</div>

    return () => {

      let winEffect = ''
      let border: BorderType = 'all'

      return (
        <Box border={border} background={winEffect} align="center" justify="center" onClick={e => clickCell(e) }>
          <div>{thisCell.chip?.name}</div>
        </Box>        
      )
    }
  }
}