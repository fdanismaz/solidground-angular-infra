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

  items: DropDownItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  setItems(items: DropDownItem[]) : void {
    this.items = items;
  }

  addItem(item: DropDownItem) : void {
    this.items.push(item);
  }

  clearItems(): void {
    this.items = [];
  }

  dropdownItemSelected(item) {
    this.onDropdownItemSelected.emit(item);
  }

}
