export class SelectItem {

  private _selected: boolean = false;

  constructor(private _label: string, private _value: string, private _disabled: boolean) {}

  get selected(): boolean {
    return this._selected;
  }

  get label(): string {
    return this._label;
  }

  get value(): string {
    return this._value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set selected(value: boolean) {
    this._selected = value;
  }
}
