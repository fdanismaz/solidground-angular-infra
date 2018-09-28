import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalManager} from '../modal.manager';

@Component({
  selector: 'f-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  confirmText: string;

  @Input()
  cancelText: string;

  @Input()
  manager: ModalManager;

  @Output()
  onModalConfirmed = new EventEmitter();

  @Output()
  onModalCancelled = new EventEmitter();

  @ViewChild('content')
  content: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.manager.content = this.content;
    this.manager.modalService = this.modalService;
  }

  confirm() {
    this.manager.close();
    this.onModalConfirmed.emit();
  }

  cancel() {
    this.manager.close();
    this.onModalCancelled.emit();
  }
}
