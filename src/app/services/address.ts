import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Address extends Parse.Object {

  constructor() {
    super('Address');
  }

  static getInstance() {
    return this;
  }

  load(params: any = {}): Promise<Address[]> {
    return new Promise((resolve, reject) => {

      let page = params.page || 0;
      let limit = params.limit || 100;

      let query = new Parse.Query(Address);

      query.skip(page * limit);
      query.limit(limit);

      if (params.user) {
        query.equalTo('user', params.user);
      }
      query.include('user');
      query.equalTo('isActive', true);
      query.descending('createdAt');
      query.find().then((data: Address[]) => resolve(data), error => reject(error));
    });
  }

  loadOne(id: string): Promise<Address> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Address);
      query.include('place');
      query.equalTo('objectId', id);
      query.equalTo('status', 'Active');
      query.first().then((data: Address) => resolve(data), error => reject(error));
    });
  }

  get name(): string {
    return this.get('name');
  }
  set name(val) {
    this.set('name', val);
  }

  get description(): string {
    return this.get('description');
  }
  set description(val) {
    this.set('description', val);
  }

  get phone(): string {
    return this.get('phone');
  }
  set phone(val) {
    this.set('phone', val);
  }

  get address(): string {
    return this.get('address');
  }
  set address(val) {
    this.set('address', val);
  }

  get type() {
    return this.get('type');
  }

  set type(val) {
    this.set('type', val);
  }

  get properties() {
    return this.get('properties');
  }

  set properties(val) {
    this.set('properties', val);
  }

  get location() {
    return this.get('location');
  }

  set location(val) {
    var geoPoint = new Parse.GeoPoint({
      latitude: val.lat,
      longitude: val.lng
    });
    this.set('location', geoPoint);
  }
}

Parse.Object.registerSubclass('Address', Address);