import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class City extends Parse.Object {

  constructor() {
    super('City');
  }

  static getInstance() {
    return this;
  }

  load(params: any = {}): Promise<City[]> {
    return new Promise((resolve, reject) => {

      let page = params.page || 0;
      let limit = params.limit || 100;
      
      let query = new Parse.Query(City);

      query.skip(page * limit);
      query.limit(limit);
      query.equalTo('isActive', true);
      query.ascending('sort');
      query.find().then((data: City[]) => resolve(data), error => reject(error));
    });
  }


  get name(): string {
    return this.get('name');
  }

  get sort(): string {
    return this.get('sort');
  }
}

Parse.Object.registerSubclass('City', City);