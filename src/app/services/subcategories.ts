import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class SubCategory extends Parse.Object {

  constructor() {
    super('SubCategory');
  }

  static getInstance() {
    return this;
  }

  load(): Promise<SubCategory[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(SubCategory);
      query.equalTo('status', 'Active');
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: SubCategory[]) => resolve(data), error => reject(error));
    });
  }

  get title(): string {
    return this.get('title');
  }

  get parentId() {
    return this.get('parentId');
  }

  get icon() {
    return this.get('icon');
  }

  get image() {
    return this.get('image');
  }

  get imageThumb() {
    return this.get('imageThumb');
  }

  get placeCount() {
    return this.get('placeCount');
  }

  get slug() {
    return this.get('slug');
  }

}

Parse.Object.registerSubclass('SubCategory', SubCategory);
