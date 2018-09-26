import {DropDownItemType} from './dropdown-item-type.enum';

export class DropDownItem {

  constructor(private type: DropDownItemType,
              private label: string,
              private link: string) {};

  getType() : DropDownItemType {
    return this.type;
  }

  getLabel() : string {
    return this.label;
  }

  getLink() : string {
    return this.link;
  }
}
