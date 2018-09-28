import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextBoxComponent } from './textbox/textbox.component';
import { DataGridComponent } from './datagrid/datagrid.component';
import { DropDownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component';
import { ButtonComponent } from './button/button.component';
import { RadioGroupComponent } from './select/radiogroup/radiogroup.component';
import { CheckGroupComponent } from './select/checkgroup/checkgroup.component';
import { TextAreaComponent } from './textarea/textarea.component';
import { RatingComponent } from './rating/rating.component';
import { SelectComponent } from './select/select/select.component';
import { ListViewComponent } from './listview/listview.component';
import { CheckBoxComponent } from './checkbox/checkbox.component';
import { CrudButtonsComponent } from './crudbuttons/crudbuttons.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    TextBoxComponent,
    DataGridComponent,
    DropDownComponent,
    DropdownItemComponent,
    ButtonComponent,
    RadioGroupComponent,
    CheckGroupComponent,
    TextAreaComponent,
    RatingComponent,
    SelectComponent,
    ListViewComponent,
    CheckBoxComponent,
    CrudButtonsComponent
  ],
  exports: [
    TextBoxComponent,
    DataGridComponent,
    DropDownComponent,
    ButtonComponent,
    RadioGroupComponent,
    CheckGroupComponent,
    TextAreaComponent,
    RatingComponent,
    SelectComponent,
    ListViewComponent,
    CrudButtonsComponent,
    CheckBoxComponent
  ]
})
export class FCoreModule { }
