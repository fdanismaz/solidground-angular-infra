import {Component, Input, OnInit} from '@angular/core';
import {ToastItemModel} from './toast-item-model';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'f-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.css']
})
export class ToastItemComponent implements OnInit {

  private _model: ToastItemModel;
  private _visible: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this._model != null) {
      this.show();
    }
  }

  @Input()
  set model(value: ToastItemModel) {
    this._model = value;
  }

  get model(): ToastItemModel {
    return this._model;
  }

  get visibleCssClass(): string {
    if (this._visible) {
      return "show";
    } else {
      return "";
    }
  }

  show(): void {
    this._visible = true;

    const observable = Observable.create((observer: Observer<void>) => {
      setTimeout(() => {
        observer.complete();
      }, 5500);
    });

    observable.subscribe(null, null, () => {
      this.hide();
    });
  }

  hide(): void {
    this._visible = false;
    this.model.complete();
  }

}
