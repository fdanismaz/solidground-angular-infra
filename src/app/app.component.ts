import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataGridComponent} from './modules/fcore/datagrid/datagrid.component';
import {GridRow} from './modules/fcore/datagrid/grid-row.model';
import {GridMetaData} from './modules/fcore/datagrid/grid-metadata.model';
import {GridHeader} from './modules/fcore/datagrid/grid-header.model';
import {GridCell} from './modules/fcore/datagrid/grid-cell.model';
import {DropDownComponent} from './modules/fcore/dropdown/dropdown.component';
import {DropDownItem} from './modules/fcore/dropdown/dropdown-item/dropdown-item.model';
import {DropDownItemType} from './modules/fcore/dropdown/dropdown-item/dropdown-item-type.enum';
import {SelectItem} from './modules/fcore/select/select-item.model';
import {RadioGroupComponent} from './modules/fcore/select/radiogroup/radiogroup.component';
import {CheckGroupComponent} from './modules/fcore/select/checkgroup/checkgroup.component';
import {TextBoxType} from './modules/fcore/textbox/textbox-type.enum';
import {SelectComponent} from './modules/fcore/select/select/select.component';
import {ListViewComponent} from './modules/fcore/listview/listview.component';
import {ListViewItem} from './modules/fcore/listview/listview-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {

  title = 'app';

  @ViewChild(DataGridComponent)
  testTable: DataGridComponent;

  @ViewChild(DropDownComponent)
  testDropdown: DropDownComponent;

  @ViewChild(RadioGroupComponent)
  testRadioGroup: RadioGroupComponent;

  @ViewChild(CheckGroupComponent)
  testCheckGroup: CheckGroupComponent;

  @ViewChild(SelectComponent)
  testSelect: SelectComponent;

  @ViewChild(ListViewComponent)
  testList: ListViewComponent;

  // This is needed to be able to use the enum in HTML template
  TextBoxType: typeof TextBoxType = TextBoxType;

  onTextChanged(value: string) {
    console.log("new value is: " + value);
  }

  ngOnInit(): void {
    console.log("initializing table component");

    var metadata = new GridMetaData();
    metadata.addHeader(new GridHeader("name", "Name"));
    metadata.addHeader(new GridHeader("surname", "Surname"));
    metadata.addHeader(new GridHeader("birthdate", "Date of Birth"));

    this.testTable.metadata = metadata;
  }

  ngAfterContentInit(): void {
    var data = new Array<GridRow>();
    data.push(new GridRow([
        new GridCell("name", "Furkan", ""),
        new GridCell("surname", "Danismaz", ""),
        new GridCell("birthdate", "07/12/1985", "text-danger")
      ]));

    data.push(new GridRow([
      new GridCell("name", "Cansu", ""),
      new GridCell("surname", "Danismaz", ""),
      new GridCell("birthdate", "05/02/1989", "text-danger")
    ]));

    this.testTable.data = data;

    var options = new Array<DropDownItem>();
    options.push(new DropDownItem(DropDownItemType.Header, 'Settings', ''));
    options.push(new DropDownItem(DropDownItemType.Default, 'Action', "#"));
    options.push(new DropDownItem(DropDownItemType.Default, 'Another action', "#"));
    options.push(new DropDownItem(DropDownItemType.Default, 'Something else', "#"));
    options.push(new DropDownItem(DropDownItemType.Separator, '', ''));
    options.push(new DropDownItem(DropDownItemType.Default, 'Separated link', '#'));
    this.testDropdown.items = options;

    var selectOptions = new Array<SelectItem>();
    selectOptions.push(new SelectItem('Student', 'student', false));
    selectOptions.push(new SelectItem('Bachelor\'s Degree', 'bachelor', false));
    selectOptions.push(new SelectItem('Master of Science', 'master', true));
    selectOptions.push(new SelectItem('Doctorate', 'doctorate', false));
    this.testRadioGroup.setOptions(selectOptions);
    this.testCheckGroup.setOptions(selectOptions);
    this.testSelect.setOptions(selectOptions);

    var listViewItems = new Array<ListViewItem>();
    listViewItems.push(new ListViewItem("1", 'Programming', 'Questions about programming', false, '', '3 daysa ago', 'Donec id elit non mi porta.'));
    listViewItems.push(new ListViewItem("2", 'Management', 'Questions about leading people', true));

    this.testList.items = listViewItems;
  }

  onDropdownItemSelected(item: DropDownItem) {
    console.log(item.label);
  }

  onMyButtonClicked() {
    console.log('my button clicked');
  }

  onRadioEducationSelectedChanged(item: SelectItem) {
    console.log(item.value);
  }

  onCheckEducationSelectedChanged(item: SelectItem) {
    console.log(this.testCheckGroup.getSelectedItems());
  }

  onSelectEducationSelectedChange(item: SelectItem) {
    console.log(item);
  }

  onTextAreaTextChanged(value: string) {
    console.log(value);
  }

  onSelectedItemChanged(item: ListViewItem) {
    console.log(item);
  }
}
