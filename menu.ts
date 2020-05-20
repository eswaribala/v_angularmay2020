export class Menu {
  private _label: string;
  private _icon:string;
  private _items:FirstSubMenu[];
  private _routerLink:string;

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get items(): FirstSubMenu[] {
    return this._items;
  }

  set items(value: FirstSubMenu[]) {
    this._items = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
}


export class FirstSubMenu{
  private _label: string;
  private _icon:string;
  private _items:SecondSubMenu[];
  private _routerLink:string;


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get items(): SecondSubMenu[] {
    return this._items;
  }

  set items(value: SecondSubMenu[]) {
    this._items = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
}
export class SecondSubMenu{
  private _label: string;
  private _icon:string;
  private _items:SecondSubMenu[];
  private _routerLink:string;


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get items(): SecondSubMenu[] {
    return this._items;
  }

  set items(value: SecondSubMenu[]) {
    this._items = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
}
