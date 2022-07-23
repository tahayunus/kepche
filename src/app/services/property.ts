import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Property extends Parse.Object {
  public property: any;
  constructor() {
    super('Property');
  }

  static getInstance() {
    return this;
  }

  load(params: any = {}): Promise<Property[]> {
    return new Promise((resolve, reject) => {

      let page = params.page || 0;
      let limit = params.limit || 100;
      const mid = params.mid;
      const cid = params.cid;
      let query = new Parse.Query(Property);
      if (params.id) {
        query.equalTo('objectId', params.id);
      }
      if (params.mid) {
        if (Array.isArray(mid)) {
          query.notContainedIn('objectId', mid);
        }
      }
      if (params.cid) {
        if (Array.isArray(cid)) {
          query.containedIn('objectId', cid);
        }
      }
      query.skip(page * limit);
      query.limit(limit);
      query.equalTo('isActive', true);
      query.descending('createdAt');
      query.include('Place');
      query.find().then((data: Property[]) => resolve(data), error => reject(error));
    });
  }

  get title() {
    return this.get('title');
  }
  get icon(): string {
    return this.get('icon');
  }
  get rel2(): Parse.Relation {
    return this.get('relation');
  }
}

Parse.Object.registerSubclass('Property', Property);