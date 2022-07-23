import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Checkin extends Parse.Object {

  constructor() {
    super('Post');
  }

  static getInstance() {
    return this;
  }


  load(params: any = {}): Promise<Checkin[]> {
    return new Promise((resolve, reject) => {

      let page = params.page || 0;
      let limit = params.limit || 6;
      
      let query = new Parse.Query(Checkin);

      query.skip(page * limit);
      query.limit(limit);
      query.include('place');
      query.equalTo('status', 'Active');
      query.descending('createdAt');
      query.find().then((data: Checkin[]) => resolve(data), error => reject(error));
    });
  }

  loadOne(id: string): Promise<Checkin> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Checkin);
      query.include('place');
      query.equalTo('objectId', id);
      query.equalTo('status', 'Active');
      query.first().then((data: Checkin) => resolve(data), error => reject(error));
    });
  }


  get place(): any {
    return this.get('place');
  }

  get user(): any {
    return this.get('user');
  }

  get text() {
    return this.get('text');
  }

  get status() {
    return this.get('status');
  }

  get time() {
    return this.get('time');
  }

}

Parse.Object.registerSubclass('Checkin', Checkin);