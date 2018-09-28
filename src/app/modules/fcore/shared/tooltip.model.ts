import {TooltipPosition} from './tooltip-position.model';

export class Tooltip {

  constructor(private _text: string, private _position: TooltipPosition) {}

  get text(): string {
    return this._text;
  }

  get position(): TooltipPosition {
    return this._position;
  }

  set text(value: string) {
    this._text = value;
  }

  set position(value: TooltipPosition) {
    this._position = value;
  }

  get positionStr() : string {
    switch (this._position) {
      case TooltipPosition.Left: return "left";
      case TooltipPosition.Top: return "top";
      case TooltipPosition.Right: return "right";
      case TooltipPosition.Bottom: return "bottom";
    }

    return "top";
  }
}
