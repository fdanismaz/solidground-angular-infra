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

  onSelectionChanged(item: SelectItem) {
    this.onSelectedChanged.emit(item);
  }

  getSelectedItems() : SelectItem[] {
    return this.options
      .filter(option => option.selected);
  }

}
