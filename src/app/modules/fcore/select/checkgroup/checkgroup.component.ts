import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from '../select-item.model';

@Component({
  selector: 'f-checkgroup',
  templateUrl: './checkgroup.component.html',
  styleUrls: ['./checkgroup.component.css']
})
export class CheckGroupComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  inline: boolean;

  private _options: SelectItem[] = [];

  @Output()
  onSelectedChanged = new EventEmitter<SelectItem[]>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set options(value: SelectItem[]) {
    this._options = value;
  }

  get options(): SelectItem[] {
    return this._options;
  }

  addOption(option: SelectItem): void {
    this._options.push(option);
  }

  clearOptions(): void {
    this._options = [];
  }

  selectionChanged() {
    this.onSelectedChanged.emit(this.selectedItems);
  }

  selectOption(value: string) {
    this.options.find(x => x.value === value).selected = true;
  }

  unSelectOption(value: string) {
    this.options.find(x => x.value === value).selected = false;
  }

  get selectedItems() : SelectItem[] {
    return this._options
      .filter(option => option.selected);
  }

}
