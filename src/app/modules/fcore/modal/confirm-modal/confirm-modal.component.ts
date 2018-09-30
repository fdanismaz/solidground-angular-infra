import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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

  @Output()
  onModalClosed = new EventEmitter<boolean>();

  @ViewChild('content')
  content: ElementRef;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  open(title: string, message: string, size?: string, confirmText?: string, cancelText?: string) {
    let options : object = size == null ? {} : { size: size };
    this._title = title;
    this._message = message;
    this._confirmText = confirmText;
    this._cancelText = cancelText;
    this._modalReference = this._modalService.open(this.content, options);
  }

  close(confirmed: boolean) {
    if (confirmed) {
      // Only if the modal is closed via the confirm button
      this.onModalClosed.emit(true);
    } else {
      this.onModalClosed.emit(false);
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
