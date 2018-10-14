import {Component, OnInit} from '@angular/core';
import {ToastItemComponent} from './toast-item/toast-item.component';
import {ToastItemModel} from './toast-item/toast-item-model';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'f-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  items: ToastItemModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  notify(title: string, message: string) {
    let toastModel = new ToastItemModel(this, title, message, 'default');
    this.items.push(toastModel);
  }

  success(title: string, message: string) {
    let toastModel = new ToastItemModel(this, title, message, 'alert alert-success');
    this.items.push(toastModel);
  }

  error(title: string, message: string) {
    let toastModel = new ToastItemModel(this, title, message, 'alert alert-danger');
    this.items.push(toastModel);
  }

  warning(title: string, message: string) {
    let toastModel = new ToastItemModel(this, title, message, 'alert alert-warning');
    this.items.push(toastModel);
  }

  remove(model: ToastItemModel) {
    const index = this.items.indexOf(model);
    this.items.splice(index, 1);
  }

}
