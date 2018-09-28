import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from '../select-item.model';

@Component({
  selector: 'f-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.css']
})
export class RadioGroupComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  inline: boolean;

  @Output()
  onSelectedChanged = new EventEmitter<SelectItem>();

  private _options: SelectItem[] = [];

  selectedOption: SelectItem;

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

  selectionChanged(item: SelectItem) {
    this.onSelectedChanged.emit(item);
  }

  selectOption(value: string) {
    this.selectedOption = this.options.find(x => x.value === value);
  }

  getSelectedItem() : SelectItem {
    return this.options.find(x => x.selected);
  }

}
