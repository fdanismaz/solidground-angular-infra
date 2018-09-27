export class GridHeader {

  constructor(private _id: string, private _text) {}

  get id(): string {
    return this._id;
  }

  get text() {
    return this._text;
  }
}
