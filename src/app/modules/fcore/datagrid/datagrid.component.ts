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
  private _data : GridRow[] = [];

  @Output()
  onSelectedChanged = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  get metadata(): GridMetaData {
    return this._metadata;
  }

  get data(): GridRow[] {
    return this._data;
  }

  @Input()
  set metadata(value: GridMetaData) {
    this._metadata = value;
  }

  @Input()
  set data(value: GridRow[]) {
    this._data = value;
  }
}
