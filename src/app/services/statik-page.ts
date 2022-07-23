import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class StatikPage extends Parse.Object {

  constructor() {
    super('StatikPage');
  }

  static getInstance() {
    return this;
  }

  getSlug(): string {
    let slug = '1/pages/' + this.id;

    if (this.slug) {
      slug += '/' + this.slug;
    }

    return slug;
  }

  load(lang: string): Promise<StatikPage[]> {
    return new Promise((resolve, reject) => {

      let query = new Parse.Query(StatikPage);
      query.equalTo('isActive', true);
      query.equalTo('lang', lang);
      query.descending('createdAt');
      query.find().then((data: StatikPage[]) => resolve(data), error => reject(error));
    });
  }

  loadOne(slug: string): Promise<StatikPage> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(StatikPage);
      query.equalTo('slug', slug);
      query.equalTo('isActive', true);
      query.first().then((data: StatikPage) => resolve(data), error => reject(error));
    });
  }

  get title(): string {
    return this.get('title');
  }

  get content(): string {
    return this.get('content');
  }

  get image(): any {
    return this.get('image');
  }

  get slug() {
    return this.get('slug');
  }

  toString(): string {
    return this.title;
  }
}

Parse.Object.registerSubclass('StatikPage', StatikPage);