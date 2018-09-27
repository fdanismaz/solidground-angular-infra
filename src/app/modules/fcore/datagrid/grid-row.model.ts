import {GridCell} from './grid-cell.model';

export class GridRow {

  constructor(private _cells: GridCell[]) {}

  get cells(): GridCell[] {
    return this._cells;
  }

  addCell(cell: GridCell) {
    this._cells.push(cell);
  }
}
