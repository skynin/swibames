import React, { createElement, ReactElement } from 'react'
import { Box } from "grommet"
import Cell from '../../../core/src/models/Cell'
import { BorderType } from 'grommet/utils'

var lastCellViewID = 9999

type ClickFuncType = (c: CellView | undefined, event: React.MouseEvent<HTMLElement>) => void
type RE_CellViewProps = ReactElement<CellViewProps>
type ClickAnswerType = 'ok' | null

interface CellViewProps {
  key? :any
  cellView?: CellView
  clickCell?: ClickFuncType
}

export default class CellView {
  public cell: Cell | null = null

  public idView
  public wait: boolean = false
  public brim: string | null = null
  public effect: string | null = null
  public info: string | null = null 

  constructor(cell: Cell | null = null) {
    this.cell = cell

    this.idView = 'cllv' + (++lastCellViewID)

    this.clickCellBind = this.clickCell.bind(this)
  }

  get reactKey() {
    return this.cell?.chip?.id || this.cell?.id || this.idView
  }

  drawFC() : React.FC<CellViewProps> {
    return this.cell ? cellRender : cellEmptyRender
  }

  createElement(props: CellViewProps = {}) : RE_CellViewProps {
    const cellView = props.cellView || this;
    return React.createElement(cellView.drawFC(),
    { key: props.key || cellView.reactKey,
       cellView,
       clickCell: props.clickCell || cellView.clickCellBind
    })
  }

  private clickCellBind: ClickFuncType

  clickCell(cellView: CellView | undefined, event: React.MouseEvent<HTMLElement>) : ClickAnswerType
  {
    if (!cellView) return null;

    // TODO

    return 'ok'
  }
}

function cellRender({cellView, clickCell} : CellViewProps) : RE_CellViewProps {

  let winEffect = ''
  let border: BorderType = 'all'

  function onClick(e: React.MouseEvent<HTMLElement>) {
    clickCell!(cellView, e)
  }

  return (
    <Box border={border} background={winEffect} align="center" justify="center" onClick={onClick}>
      <div>{cellView?.cell?.chip?.name}</div>
    </Box>        
  )
}

function cellEmptyRender({cellView, clickCell} : CellViewProps) : RE_CellViewProps {
  let border: BorderType = 'all'
  return (
    <Box border={border} align="center" justify="center">
      <div><p>&nbsp;</p></div>
    </Box>        
  )
}