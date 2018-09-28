import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalManager} from '../modal.manager';

@Component({
  selector: 'f-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  confirmText: string;

  @Input()
  manager: ModalManager;

  @Output()
  onModalConfirmed = new EventEmitter();

  @ViewChild('content')
  content: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.manager.content = this.content;
    this.manager.modalService = this.modalService;
  }

  close(confirmed: boolean) {
    this.manager.close();
    if (confirmed) {
      // Only if the modal is closed via the confirm button
      this.onModalConfirmed.emit();
    }
  }

}
