import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Preference {

  private _unit;
  private _mapStyle;
  private _lang;
  private _address;

  get unit(): any {
    return this._unit;
  }

  set unit(val) {
    this._unit = val;
  }

  get mapStyle(): any {
    return this._mapStyle;
  }

  set mapStyle(val) {
    this._mapStyle = val;
  }

  get lang(): any {
    return this._lang;
  }

  set lang(val) {
    this._lang = val;
  }

  get address(): any {
    return this._address;
  }

  set address(val) {
    this._address = val;
  }

}
