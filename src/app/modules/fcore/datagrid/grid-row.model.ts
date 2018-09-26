import {GridCell} from './grid-cell.model';

export class GridRow {

  constructor(private cells: GridCell[]) {}

  getCells() : GridCell[] {
    return this.cells;
  }

  addCell(cell: GridCell) {
    this.cells.push(cell);
  }
}
