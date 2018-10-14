import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GridMetaData} from './grid-metadata.model';
import {GridRow} from './grid-row.model';

@Component({
  selector: 'f-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input()
  id: string;

  private _metadata: GridMetaData = new GridMetaData();
  private _data: GridRow[] = [];
  private _selectedRows: GridRow[] = [];
  private _isSmall: boolean = false;
  private _multiSelect: boolean = false;

  @Output()
  onSelectedChanged = new EventEmitter<GridRow[]>();

  constructor() {
  }

  ngOnInit() {
  }

  get metadata(): GridMetaData {
    return this._metadata;
  }

  get data(): GridRow[] {
    return this._data;
  }

  get selectedRow(): GridRow {
    if (this._selectedRows.length > 0)
    return this._selectedRows[0];
  }

  get selectedRows(): GridRow[] {
    return this._selectedRows;
  }

  get sizeCssClass(): string {
    if (this._isSmall) {
      return "table-sm"
    } else {
      return "";
    }
  }

  @Input()
  set metadata(value: GridMetaData) {
    this._metadata = value;
  }

  @Input()
  set data(value: GridRow[]) {
    this._data = value;
  }

  @Input()
  set isSmall(value: boolean) {
    this._isSmall = value;
  }

  @Input()
  set multiSelect(value: boolean) {
    this._multiSelect = value;
  }

  onRowSelected(row: GridRow) {
    if (this._multiSelect) {
      row.selected = !row.selected;

      // if row is selected then add it to the selected rows array, else remove it
      if (row.selected) {
        this.selectedRows.push(row);
      } else {
        // remove the row
        const index = this.selectedRows.indexOf(row);
        this.selectedRows.splice(index, 1);
      }
      this.onSelectedChanged.emit(this.selectedRows);
    }
    else if (!row.selected) { // if row is not already selected
      this._data.forEach(x => x.selected = false);
      this._selectedRows = [];
      row.selected = true;
      this.onSelectedChanged.emit(this.selectedRows);
    }
  }
}
