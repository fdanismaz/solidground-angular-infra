import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'f-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  cssClass: string;

  @Input()
  buttonType: string;

  @Input()
  label: string;

  @Output()
  onClick = new EventEmitter();

  enabled: boolean;

  constructor() { }

  ngOnInit() {
    this.enabled = true;
    this.buttonType = 'button';
  }

  buttonClicked(): void {
    this.onClick.emit();
  }

  enable(value: boolean) {
    this.enabled = value;
  }

}
