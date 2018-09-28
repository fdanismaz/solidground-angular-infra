import {DropDownItemType} from './dropdown-item-type.enum';

export class DropDownItem {

  constructor(private _type: DropDownItemType,
              private _label: string,
              private _link: string,
              private _data?: object) {};

  get type(): DropDownItemType {
    return this._type;
  }

  get label(): string {
    return this._label;
  }

  get link(): string {
    return this._link;
  }

  get data(): object {
    return this._data;
  }
}
