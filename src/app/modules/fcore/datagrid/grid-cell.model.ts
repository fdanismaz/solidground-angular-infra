export class GridCell {

  constructor(private _id: string, private _value: any, private _cssClass: string) {}

  get id(): string {
    return this._id;
  }

  get value(): any {
    return this._value;
  }

  get cssClass(): string {
    return this._cssClass;
  }
}
