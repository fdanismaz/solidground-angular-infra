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

  metadata: GridMetaData = new GridMetaData();
  data : GridRow[] = [];

  @Output()
  onSelectedChanged = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  setMetadata(metadata: GridMetaData) {
    this.metadata = metadata;
  }

  setData(data: GridRow[]) {
    this.data = data;
  }
}
