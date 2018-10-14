import {GridCell} from './grid-cell.model';

/**
 * The datagrid row model. The id property has to be unique
 */
export class GridRow {

  selected: boolean = false;

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

  get style(): string {
    if (this.selected) {
      return "bg-info";
    } else {
      return "";
    }
  }

  addCell(cell: GridCell) {
    this._cells.push(cell);
  }
}
