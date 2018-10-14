import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {GridRow} from './modules/fcore/datagrid/grid-row.model';
import {GridMetaData} from './modules/fcore/datagrid/grid-metadata.model';
import {GridHeader} from './modules/fcore/datagrid/grid-header.model';
import {GridCell} from './modules/fcore/datagrid/grid-cell.model';
import {DropDownItem} from './modules/fcore/dropdown/dropdown-item/dropdown-item.model';
import {DropDownItemType} from './modules/fcore/dropdown/dropdown-item/dropdown-item-type.enum';
import {SelectItem} from './modules/fcore/select/select-item.model';
import {TextBoxType} from './modules/fcore/textbox/textbox-type.enum';
import {ListViewItem} from './modules/fcore/listview/listview-item.model';
import {InfoModalComponent} from './modules/fcore/modal/info-modal/info-modal.component';
import {ConfirmModalComponent} from './modules/fcore/modal/confirm-modal/confirm-modal.component';
import {CustomModalComponent} from './modules/fcore/modal/custom-modal/custom-modal.component';
import {TextBoxComponent} from './modules/fcore/textbox/textbox.component';
import {TextAreaComponent} from './modules/fcore/textarea/textarea.component';
import {ToastComponent} from './modules/fcore/toast/toast.component';

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

  // This is needed to be able to use the enum in HTML template
  TextBoxType: typeof TextBoxType = TextBoxType;

  @ViewChild('infoModal')
  infoModal: InfoModalComponent;

  @ViewChild('confirmModal')
  confirmModal: ConfirmModalComponent;

  @ViewChild('customModal')
  customModal: CustomModalComponent;

  @ViewChild('txtName')
  textName: TextBoxComponent;

  @ViewChild('txtDescr')
  textDescr: TextAreaComponent;

  @ViewChild('toast')
  toast: ToastComponent;

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
  }

  ngAfterContentInit(): void {
    this.tableData.push(new GridRow('1', null,[
        new GridCell("name", "Furkan", ""),
        new GridCell("surname", "Danismaz", ""),
        new GridCell("birthdate", "07/12/1985", "text-danger")
      ]));

    this.tableData.push(new GridRow('2', null,[
      new GridCell("name", "Cansu", ""),
      new GridCell("surname", "Danismaz", ""),
      new GridCell("birthdate", "05/02/1989", "text-danger")
    ]));

    this.dropdownItems.push(new DropDownItem(DropDownItemType.Header, 'Settings'));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Action'));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Another action'));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Something else'));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Separator, ''));
    this.dropdownItems.push(new DropDownItem(DropDownItemType.Default, 'Separated link'));

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
    this.infoModal.open('Info Modal Title', 'Info Modal Message', 'lg', 'Confirm');
  }

  openInfoSmall() {
    this.infoModal.open('Info Modal Title', 'Info Modal Message', 'sm', 'Confirm');
  }

  openInfo() {
    this.infoModal.open('Info Modal Title', 'Info Modal Message', null, 'Confirm');
  }

  openConfirmLarge() {
    this.confirmModal.open('Confirm Modal Title', 'Confirm Message Text', 'lg', 'OK', 'Cancel');
  }

  openConfirmSmall() {
    this.confirmModal.open('Confirm Modal Title', 'Confirm Message Text', 'sm', 'OK', 'Cancel');
  }

  openConfirm() {
    this.confirmModal.open('Confirm Modal Title', 'Confirm Message Text', null, 'OK', 'Cancel');
  }

  onCustomModalFirstButtonClicked() {
    console.log('first button clicked');
    this.customModal.close();
  }

  onCustomModalSecondButtonClicked() {
    console.log('second button clicked')
    this.customModal.close();
  }

  openCustomModal() {
    this.customModal.open('Test Custom Modal');
  }

  onClearTextsClicked() {
    this.textName.clear();
    this.textDescr.clear();
  }

  onShowErrorClicked() {
    this.textName.showError('Can\'t leave this field empty!')
  }

  onShowWarningClicked() {
    this.textName.showWarning('This is a warning instead');
  }

  onClearWarningClicked() {
    this.textName.clearWarning();
  }

  onClearErrorClicked() {
    this.textName.clearError();
  }

  onClearClicked() {
    this.textName.clear();
  }

  onReadonyToggleClicked() {
    this.textName.readonly = !this.textName.readonly;
  }

  onDisableClicked() {
    this.textName.disabled = !this.textName.disabled;
  }

  onHideToggleClicked() {
    this.textName.hidden = !this.textName.hidden;
  }

  onShowErrorAreaClicked() {
    this.textDescr.showError('Text Area Error message');
  }

  onShowWarningAreaClicked() {
    this.textDescr.showWarning('Text Area Warning message');
  }

  onClearErrorAreaClicked() {
    this.textDescr.clearError();
  }

  onClearWarningAreaClicked() {
    this.textDescr.clearWarning();
  }

  onClearAreaClicked() {
    this.textDescr.clear();
  }

  onReadonyToggleAreaClicked() {
    this.textDescr.readonly = !this.textDescr.readonly;
  }

  onDisableAreaClicked() {
    this.textDescr.disabled = !this.textDescr.disabled;
  }

  onHideToggleAreaClicked() {
    this.textDescr.hidden = !this.textDescr.hidden;
  }

  showDefaultToast() {
    this.toast.notify('Deafult Title', 'Sample message');
  }

  showSuccessToast() {
    this.toast.success('Success Title', 'Sample message very looooooong message. Let\'s see how the toast handle long messages...');
  }

  showErrorToast() {
    this.toast.error('Error Title', 'Error message');
  }

  onTableSelectedChanged(data: GridRow[]) {
    console.log(data);
  }
}
