import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'f-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  private _title: string;
  private _message: string;
  private _confirmText: string;
  private _modalReference: NgbModalRef;

  @ViewChild('content')
  content: ElementRef;

  @Output()
  onModalClosed = new EventEmitter<boolean>();

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  open(title: string, message: string, size?: string, confirmText?: string) {
    let options : object = size == null ? {} : { size: size };
    this._title = title;
    this._message = message;
    this._confirmText = confirmText;
    this._modalReference = this._modalService.open(this.content, options);
  }

  close(confirmed: boolean) {
    if (confirmed) {
      // Only if the modal is closed via the confirm button
      this.onModalClosed.emit(true);
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
}
