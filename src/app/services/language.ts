import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Language extends Parse.Object {

  constructor() {
    super('Language');
  }

  static getInstance() {
    return this;
  }

  load(): Promise<Language[]> {
    return new Promise((resolve, reject) => {

      let query = new Parse.Query(Language);
      query.equalTo('isActive', true);
      query.ascending('sort');

      query.find().then((data: Language[]) => resolve(data), error => reject(error));
    });
  }

  get title(): string {
    return this.get('title');
  }

  get objectId(): string {
    return this.get('objectId');
  }

  get file(): any {
    return this.get('file');
  }

  get shortcode(): string {
    return this.get('shortcode');
  }
}

Parse.Object.registerSubclass('Language', Language);