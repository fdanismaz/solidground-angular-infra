import {GridHeader} from './grid-header.model';

export class GridMetaData {

  headers: GridHeader[] = [];

  getHeaders() : GridHeader[] {
    return this.headers;
  }

  addHeader(header: GridHeader) : void {
    this.headers.push(header);
  }

}
