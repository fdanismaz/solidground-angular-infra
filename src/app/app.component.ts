import {AfterContentInit, Component, OnInit} from '@angular/core';
import {GridRow} from './modules/fcore/datagrid/grid-row.model';
import {GridMetaData} from './modules/fcore/datagrid/grid-metadata.model';
import {GridHeader} from './modules/fcore/datagrid/grid-header.model';
import {GridCell} from './modules/fcore/datagrid/grid-cell.model';
import {DropDownItem} from './modules/fcore/dropdown/dropdown-item/dropdown-item.model';
import {DropDownItemType} from './modules/fcore/dropdown/dropdown-item/dropdown-item-type.enum';
import {SelectItem} from './modules/fcore/select/select-item.model';
import {TextBoxType} from './modules/fcore/textbox/textbox-type.enum';
import {ListViewItem} from './modules/fcore/listview/listview-item.model';
import {ModalManager} from './modules/fcore/modal/modal.manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {

  listItems: ListViewItem[] = [];
  tableMetadata: GridMetaData;
  tableData: GridRow[] = [];
  dropdownItems: DropDownItem[] = [];
  selectOptions: SelectItem[] = [];
  infoModalManager: ModalManager;
  confirmModalManager: ModalManager;

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

    this.tableMetadata = metadata;
    this.infoModalManager = new ModalManager();
    this.confirmModalManager = new ModalManager();
  }

  ngAfterContentInit(): void {
    this.tableData.push(new GridRow([
        new GridCell("name", "Furkan", ""),
        new GridCell("surname", "Danismaz", ""),
        new GridCell("birthdate", "07/12/1985", "text-danger")
      ]));

    this.tableData.push(new GridRow([
      new GridCell("name", "Cansu", ""),
      new GridCell("surname", "Danismaz", ""),
      new GridCell("birthdate", "05/02/1989", "text-danger")
    ]));

    this.dropdownItems.push(new DropDownItem(DropDownItemType.Header, 'Settings', ''));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Action', "#"));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Another action', "#"));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Something else', "#"));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Separator, '', ''));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Separated link', '#'));

    this.selectOptions.push(new SelectItem('Student', 'student', false));
    this.selectOptions.push(new SelectItem('Bachelor\'s Degree', 'bachelor', false));
    this.selectOptions.push(new SelectItem('Master of Science', 'master', true));
    this.selectOptions.push(new SelectItem('Doctorate', 'doctorate', false));

    this.listItems.push(new ListViewItem("1", 'Programming', 'Questions about programming', false,  null,'', '3 daysa ago', 'Donec id elit non mi porta.'));
    this.listItems.push(new ListViewItem("2", 'Management', 'Questions about leading people', true));
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

  onCheckEducationSelectedChanged(items: SelectItem[]) {
    console.log(items);
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

  onNewButtonClicked() {
    console.log("new button clicked");
  }

  onUpdateButtonClicked() {
    console.log("update button clicked");
  }

  onDeleteButtonClicked() {
    console.log("delete button clicked");
  }

  onCheckChanged(value: boolean) {
    console.log("check changed: " + value);
  }

  openInfoLarge() {
    this.infoModalManager.openLarge();
  }

  openInfoSmall() {
    this.infoModalManager.openSmall();
  }

  openInfo() {
    this.infoModalManager.open();
  }

  openConfirmLarge() {
    this.confirmModalManager.openLarge();
  }

  openConfirmSmall() {
    this.confirmModalManager.openSmall();
  }

  openConfirm() {
    this.confirmModalManager.open();
  }

  infoModalConfirmed() {
    console.log("info modal confirmed");
  }

  confirmModalConfirmed() {
    console.log('confirm modal confirmed');
  }

  confirmModalCancelled() {
    console.log('confirm modal cancelled');
  }
}
