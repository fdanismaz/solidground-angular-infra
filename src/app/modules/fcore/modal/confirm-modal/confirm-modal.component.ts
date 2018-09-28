import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'f-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  private _title: string;
  private _message: string;
  private _confirmText: string;
  private _cancelText: string;

  private _modalReference: NgbModalRef;
  private _confirmCallback: () => any;
  private _cancelCallback: () => any;

  @ViewChild('content')
  content: ElementRef;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  open(title: string, message: string, size?: string, confirmText?: string, cancelText?: string,
       confirmCallback?: () => any, cancelCallback?: () => any) {
    let options : object = size == null ? {} : { size: size };
    this._title = title;
    this._message = message;
    this._confirmText = confirmText;
    this._cancelText = cancelText;
    this._confirmCallback = confirmCallback;
    this._cancelCallback = cancelCallback;
    this._modalReference = this._modalService.open(this.content, options);
  }

  close(confirmed: boolean) {
    if (confirmed) {
      // Only if the modal is closed via the confirm button
      this._confirmCallback();
    } else {
      this._cancelCallback();
    }
    this._modalReference.close();
  }

  get title(): string {
    return this._title;
  }

  get message(): string {
    return this._message;
  }

  get confirmText(): string {
    return this._confirmText;
  }

  get cancelText(): string {
    return this._cancelText;
  }
}
