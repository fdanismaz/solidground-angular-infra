import {GridHeader} from './grid-header.model';

export class GridMetaData {

  private _headers: GridHeader[] = [];

  get headers(): GridHeader[] {
    return this._headers;
  }

  addHeader(header: GridHeader) : void {
    this._headers.push(header);
  }

}
