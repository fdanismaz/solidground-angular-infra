import {ElementRef} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

export class ModalManager {

  private _modalService: NgbModal
  private _modalReference: NgbModalRef;
  private _content: ElementRef;

  set content(value: ElementRef) {
    this._content = value;
  }

  set modalService(value: NgbModal) {
    this._modalService = value;
  }

  openSmall() {
    this.openModal({size: 'sm'});
  }

  open() {
    this.openModal({});
  }

  openLarge() {
    this.openModal({size: 'lg'});
  }

  private openModal(options: object) {
    this._modalReference = this._modalService.open(this._content, options);
  }

  close() {
    this._modalReference.close();
  }
}
