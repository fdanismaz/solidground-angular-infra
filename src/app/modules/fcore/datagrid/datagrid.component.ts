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
  private _selectedRow: GridRow;

  @Output()
  onSelectedChanged = new EventEmitter<GridRow>();

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
    return this._selectedRow;
  }

  @Input()
  set metadata(value: GridMetaData) {
    this._metadata = value;
  }

  @Input()
  set data(value: GridRow[]) {
    this._data = value;
  }

  onRowSelected(row: GridRow) {
    // Emit the selected row changed event if there is no row selected before,
    // or the new selected row is different than the previous
    if (this._selectedRow == null || this._selectedRow.id !== row.id) {
      this._selectedRow = row;
      this.onSelectedChanged.emit(row);
    }
  }
}
