import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListViewItem} from './listview-item.model';

@Component({
  selector: 'f-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListViewComponent implements OnInit {

  items: ListViewItem[] = [];

  @Input()
  id: string;

  @Input()
  detailed: boolean = false;

  @Output()
  onSelectedItemChanged = new EventEmitter<ListViewItem>();

  constructor() { }

  ngOnInit() {
  }

  setItems(items: ListViewItem[]) : void {
    this.items = items;
  }

  clearItems(): void {
    this.items = [];
  }

  addItem(item: ListViewItem) : void {
    this.items.push(item);
  }

  // onItemSelected(item: ListViewItem) {
  //   this.items.forEach(x => x.active = false);
  //   item.active = true;
  //   this.onSelectedItemChanged.emit(item);
  // }

  onItemClicked(item: ListViewItem) {
    if (!item.disabled && !item.active) {
      this.items.forEach(x => x.active = false);
      item.active = true;
      this.onSelectedItemChanged.emit(item);
    }
  }

}
