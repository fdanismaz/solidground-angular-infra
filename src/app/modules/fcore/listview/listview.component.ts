import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListViewItem} from './listview-item.model';
import {TooltipPosition} from '../shared/tooltip-position.model';

@Component({
  selector: 'f-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListViewComponent implements OnInit {

  @Input()
  items: ListViewItem[] = [];

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  detailed: boolean = false;

  @Input()
  tooltipPosition: TooltipPosition;

  @Input()
  tooltipNewText: string;

  @Input()
  tooltipUpdateText: string;

  @Input()
  tooltipDeleteText: string;

  @Input()
  buttonNewVisible: boolean = true;

  @Input()
  buttonUpdateVisible: boolean = true;

  @Input()
  buttonDeleteVisible: boolean = true;

  @Output()
  onNewButtonClicked = new EventEmitter();

  @Output()
  onUpdateButtonClicked = new EventEmitter();

  @Output()
  onDeleteButtonClicked = new EventEmitter();

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

  itemClicked(item: ListViewItem) {
    if (!item.disabled && !item.active) {
      this.items.forEach(x => x.active = false);
      item.active = true;
      this.onSelectedItemChanged.emit(item);
    }
  }

  newButtonClicked() : void {
    this.onNewButtonClicked.emit();
  }

  updateButtonClicked() : void {
    this.onUpdateButtonClicked.emit();
  }

  deleteButtonClicked() : void {
    this.onDeleteButtonClicked.emit();
  }

  get selectedItem(): ListViewItem {
    return this.items.find(x => x.active);
  }

}
