import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'f-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  rows: number = 2; // default value

  @Input()
  text: string;

  @Output()
  onTextChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  textChanged(event) {
    this.text = event.target.value;
    this.onTextChanged.emit(event.target.value);
  }

}
