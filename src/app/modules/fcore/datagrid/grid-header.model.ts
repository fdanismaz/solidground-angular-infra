export class GridHeader {

  constructor(private id: string, private text) {}

  getId() : string {
    return this.id;
  }

  getText() : string {
    return this.text;
  }
}
