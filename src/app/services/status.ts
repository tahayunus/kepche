import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Status extends Parse.Object {

  constructor() {
    super('Status');
  }

  static getInstance() {
    return this;
  }

  load(params: any = {}): Promise<Status[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(Status);
      query.descending('createdAt');
      query.find().then((data: Status[]) => resolve(data), error => reject(error));
    });
  }

  loadOne(id: string): Promise<Status> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Status);
      query.equalTo('objectId', id);
      query.first().then((data: Status) => resolve(data), error => reject(error));
    });
  }

  get title(): string {
    return this.get('title');
  }
}

Parse.Object.registerSubclass('Status', Status);