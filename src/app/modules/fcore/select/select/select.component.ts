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

  options: SelectItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  setOptions(options: SelectItem[]): void {
    this.options = options;
  }

  addOption(option: SelectItem): void {
    this.options.push(option);
  }

  clearOptions(): void {
    this.options = [];
  }

  onSelectionChanged(event) {
    // There is no 2 way binding here with ng-model,
    // therefore, we need to update the selected property of
    // each action on our own.

    // find the selected item first
    const newValue = event.target.value;
    let selectedOption = this.options.find(x => x.getValue() === newValue);

    // set all options' selected property to false
    this.options.forEach(x => x.selected = false);

    // set the selected property of the selected item to true
    selectedOption.selected = true;

    // emit the onSelectedChange event
    this.onSelectedChanged.emit(selectedOption);
  }

  getSelectedItem() : SelectItem {
    return this.options.find(x => x.selected);
  }

}
