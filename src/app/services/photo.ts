import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Photo extends Parse.Object {

  constructor() {
    super('Photo');
  }

  static getInstance() {
    return this;
  }

  load(params: any = {}): Promise<Photo[]> {
    return new Promise((resolve, reject) => {

      let page = params.page || 0;
      let limit = params.limit || 100;
      
      let query = new Parse.Query(Photo);

      query.skip(page * limit);
      query.limit(limit);
      query.include('place');
      query.include('user');
      query.include('status');
      if(params.user) {
          query.equalTo('user', params.user);
      }
      if(params.place) {
          query.equalTo('place', params.place);
      }
      query.equalTo('isActive', true);
      query.descending('createdAt');
      query.find().then((data: Photo[]) => resolve(data), error => reject(error));
    });
  }

  create(data: any = {}): Promise<Photo> {
    return new Promise((resolve, reject) => {
      const review = new Photo();
      review.save(data).then((data: Photo) => resolve(data), error => reject(error));
    });
  }

  loadOne(id: string): Promise<Photo> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Photo);
      query.include('place');
      query.equalTo('objectId', id);
      query.equalTo('status', 'Active');
      query.first().then((data: Photo) => resolve(data), error => reject(error));
    });
  }

  get description(): string {
    return this.get('description');
  }

  get image(): any {
    return this.get('image');
  }

  get place(): any {
    return this.get('place');
  }

  get like(): any {
    return this.get('like');
  }

  get user(): any {
    return this.get('user');
  }

  get type(): any {
    return this.get('type');
  }

  get status(): any {
    return this.get('status');
  }
}

Parse.Object.registerSubclass('Photo', Photo);