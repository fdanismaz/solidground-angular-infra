import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'f-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  private _title: string;
  private _size: string;
  private _modalReference: NgbModalRef;

  data: any;

  @ViewChild('content')
  content: ElementRef;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  get title(): string {
    return this._title;
  }

  @Input()
  set size(value: string) {
    this._size = value;
  }

  open(title: string) {
    this._title = title;
    let options : object = this.size == null ? {} : { size: this.size };
    this._modalReference = this._modalService.open(this.content, options);
  }

  close() {
    this._modalReference.close();
  }

  clear() {
    this.data = null;
  }

}
