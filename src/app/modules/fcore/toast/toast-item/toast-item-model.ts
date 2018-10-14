import {EventEmitter, Output} from '@angular/core';
import {ToastComponent} from '../toast.component';

export class ToastItemModel {

  constructor(private owner: ToastComponent, private _title: string, private _message: string, private _style: string) {
  }

  get title(): string {
    return this._title;
  }

  get message(): string {
    return this._message;
  }

  get style(): string {
    return this._style;
  }

  complete() {
    console.log("emitting complete event");
    this.owner.remove(this);
  }

}
