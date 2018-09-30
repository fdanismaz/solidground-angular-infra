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

  private _text: string;
  private _hasError: boolean = false;
  private _hasWarning: boolean = false;
  private _errorMessage: string;
  private _warningMessage: string;
  private _readonly: boolean = false;
  private _disabled: boolean = false;
  private _hidden: boolean = false;

  @Output()
  onTextChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  textChanged(event) {
    this._text = event.target.value;
    this.onTextChanged.emit(event.target.value);
  }

  get errorCssClass(): string {
    if (this._hasError) {
      return 'has-danger';
    }
    return '';
  }

  get text(): string {
    return this._text;
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  get warningMessage(): string {
    return this._warningMessage;
  }

  get hasError(): boolean {
    return this._hasError;
  }

  get hasWarning(): boolean {
    return this._hasWarning;
  }

  get readonly(): boolean {
    return this._readonly;
  }

  set readonly(value: boolean) {
    this._readonly = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  set hidden(value: boolean) {
    this._hidden = value;
  }

  @Input()
  set text(value: string) {
    this._text = value;
  }

  clear() {
    this._text = '';
    this.clearError();
    this.clearWarning()
  }

  clearError() {
    this._hasError = false;
    this._errorMessage = '';
  }

  showError(message: string) {
    this._hasError = true;
    this._errorMessage = message;
  }

  showWarning(message: string) {
    this._hasWarning = true;
    this._warningMessage = message;
  }

  clearWarning() {
    this._hasWarning = false;
    this._warningMessage = '';
  }
}
