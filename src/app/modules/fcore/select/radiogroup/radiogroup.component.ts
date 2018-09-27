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

  options: SelectItem[] = [];

  selectedOption: SelectItem;

  constructor() { }

  ngOnInit() {
  }

  setOptions(options: SelectItem[]): void {
    this.options = options;
    this.selectedOption = options.find(x => x.selected);
  }

  addOption(option: SelectItem): void {
    this.options.push(option);
  }

  clearOptions(): void {
    this.options = [];
    this.selectedOption = null;
  }

  onSelectionChanged(item: SelectItem) {
    this.onSelectedChanged.emit(item);
    this.options.forEach(x => x.selected = false);
    item.selected = true;
  }

  selectOption(value: string) {
    this.selectedOption = this.options.find(x => x.value === value);
  }

  getSelectedItem() : SelectItem {
    return this.options.find(x => x.selected);
  }

}
