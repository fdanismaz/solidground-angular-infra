import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'f-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckBoxComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  checked: boolean;

  @Input()
  label: string;

  @Input()
  disabled: boolean = false;

  @Output()
  onCheckedChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  get disabledCssClass() : string {
    return this.disabled ? "disabled" : "";
  }

  itemClicked() : void {
    this.checked = !this.checked;
    this.onCheckedChanged.emit(this.checked);
  }

}
