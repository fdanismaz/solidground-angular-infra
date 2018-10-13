import {DropDownItemType} from './dropdown-item-type.enum';

export class DropDownItem {

  constructor(private _type: DropDownItemType,
              private _label: string,
              private _data?: any) {};

  get type(): DropDownItemType {
    return this._type;
  }

  get label(): string {
    return this._label;
  }

  get data(): any {
    return this._data;
  }
}
