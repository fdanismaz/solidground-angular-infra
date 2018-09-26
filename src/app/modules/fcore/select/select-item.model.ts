export class SelectItem {

  selected: boolean = false;

  constructor(private label: string, private value: string, private disabled: boolean) {}

  getValue(): string {
    return this.value;
  }

  getLabel(): string {
    return this.label;
  }

  isDisabled() : boolean {
    return this.disabled;
  }

  setDisabled(value: boolean) : void {
    this.disabled = value;
  }
}
