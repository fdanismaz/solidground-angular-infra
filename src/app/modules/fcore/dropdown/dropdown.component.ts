import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropDownItem} from './dropdown-item/dropdown-item.model';

@Component({
  selector: 'f-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropDownComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  buttonCssClass: string;

  @Output()
  onDropdownItemSelected = new EventEmitter<DropDownItem>();

  private _items: DropDownItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  get items(): DropDownItem[] {
    return this._items;
  }

  set items(value: DropDownItem[]) {
    this._items = value;
  }

  addItem(item: DropDownItem) : void {
    this._items.push(item);
  }

  clearItems(): void {
    this._items = [];
  }

  dropdownItemSelected(item) {
    this.onDropdownItemSelected.emit(item);
  }

}
