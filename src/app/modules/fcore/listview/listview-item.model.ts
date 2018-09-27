export class ListViewItem {

  constructor(
    private _id: string,
    private _title: string,
    private _text: string,
    private _disabled: boolean,
    private _icon?: string,
    private _notification?: string,
    private _note?: string,
    private _active?: boolean) {
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get text(): string {
    return this._text;
  }

  get icon(): string {
    return this._icon;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  get notification(): string {
    return this._notification;
  }

  get note(): string {
    return this._note;
  }

  get active() : boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get activeCssClass() : string {
    return this._active ? "active" : "";
  }

  get disabledCssClass() : string {
    return this._disabled ? "disabled" : "";
  }
}
