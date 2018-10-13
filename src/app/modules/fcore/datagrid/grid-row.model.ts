import {GridCell} from './grid-cell.model';

export class GridRow {

  constructor(private _id: string, private _data: object, private _cells: GridCell[]) {}

  get id(): string {
    return this._id;
  }

  get data(): object {
    return this._data;
  }

  get cells(): GridCell[] {
    return this._cells;
  }

  addCell(cell: GridCell) {
    this._cells.push(cell);
  }
}
