export class GridCell {

  constructor(private id: string, private value: any, private cssClass: string) {}

  getId() : string {
    return this.id;
  }

  getValue() : any {
    return this.value;
  }

  getCssClass() : string {
    return this.cssClass;
  }
}
