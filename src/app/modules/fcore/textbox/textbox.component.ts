import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TextBoxType} from './textbox-type.enum';

@Component({
  selector: 'f-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextBoxComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  type: TextBoxType;

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

  get textBoxType() : string {
    switch (this.type) {
      case TextBoxType.Text: return "text";
      case TextBoxType.Password: return "password";
      case TextBoxType.Email: return "email";
    }
    return "text";
  }

}
