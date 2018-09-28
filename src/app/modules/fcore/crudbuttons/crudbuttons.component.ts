import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tooltip} from '../shared/tooltip.model';
import {TooltipPosition} from '../shared/tooltip-position.model';

@Component({
  selector: 'f-crudbuttons',
  templateUrl: './crudbuttons.component.html',
  styleUrls: ['./crudbuttons.component.css']
})
export class CrudButtonsComponent implements OnInit {

  tooltipNew: Tooltip = new Tooltip('New', TooltipPosition.Top);
  tooltipUpdate: Tooltip = new Tooltip('Update', TooltipPosition.Top);
  tooltipDelete: Tooltip = new Tooltip('Delete', TooltipPosition.Top);

  @Input()
  tooltipPosition: TooltipPosition;

  @Input()
  tooltipNewText: string;

  @Input()
  tooltipUpdateText: string;

  @Input()
  tooltipDeleteText: string;

  @Input()
  buttonNewVisible: boolean = true;

  @Input()
  buttonUpdateVisible: boolean = true;

  @Input()
  buttonDeleteVisible: boolean = true;

  @Output()
  onNewButtonClicked = new EventEmitter();

  @Output()
  onUpdateButtonClicked = new EventEmitter();

  @Output()
  onDeleteButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.tooltipNewText != null) { this.tooltipNew.text = this.tooltipNewText; }
    if (this.tooltipUpdateText != null) { this.tooltipUpdate.text = this.tooltipUpdateText };
    if (this.tooltipDeleteText != null) { this.tooltipDelete.text = this.tooltipDeleteText };

    if (this.tooltipPosition != null) {
      this.tooltipNew.position = this.tooltipPosition;
      this.tooltipUpdate.position = this.tooltipPosition;
      this.tooltipDelete.position = this.tooltipPosition;
    }
  }

  newButtonClicked() : void {
    this.onNewButtonClicked.emit();
  }

  updateButtonClicked() : void {
    this.onUpdateButtonClicked.emit();
  }

  deleteButtonClicked() : void {
    this.onDeleteButtonClicked.emit();
  }

}
