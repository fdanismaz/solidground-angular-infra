import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from '../select-item.model';

@Component({
  selector: 'f-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  label: string;

  @Output()
  onSelectedChanged = new EventEmitter<SelectItem>();

  private _options: SelectItem[] = [];

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

  selectionChanged(event) {
    // There is no 2 way binding here with ng-model,
    // therefore, we need to update the selected property of
    // each action on our own.

    // find the selected item first
    const newValue = event.target.value;
    let selectedOption = this._options.find(x => x.value === newValue);

    // set all options' selected property to false
    this._options.forEach(x => x.selected = false);

    // set the selected property of the selected item to true
    selectedOption.selected = true;

    // emit the onSelectedChange event
    this.onSelectedChanged.emit(selectedOption);
  }

  getSelectedItem() : SelectItem {
    return this._options.find(x => x.selected);
  }

}
