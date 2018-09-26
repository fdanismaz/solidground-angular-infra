import {Component, Input, OnInit} from '@angular/core';
import {DropDownItem} from './dropdown-item.model';
import {DropDownItemType} from './dropdown-item-type.enum';

@Component({
  selector: 'f-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent implements OnInit {

  // This is needed to be able to use the enum in HTML template
  DropDownItemType: typeof DropDownItemType = DropDownItemType;

  @Input()
  item: DropDownItem;

  constructor() { }

  ngOnInit() {
  }

}
