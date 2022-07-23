import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Category } from './categories';

@Injectable({
  providedIn: 'root'
})
export class Story extends Parse.Object {

  constructor() {
    super('Story');
  }

  static getInstance() {
    return this;
  }

  load(params: any = {}): Promise<Story[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(Story); 
      query.include('place');
      if(params.place){
        query.equalTo('place', params.place);
      }      
      query.ascending('createdAt');

      query.find().then((data: Story[]) => resolve(data), error => reject(error));
    });
  }

  get image(): any {
    return this.get('image');
  }

  get imageThumb(): any {
    return this.get('image');
  }

  get place(): any {
    return this.get('place');
  }

  get lastAt(): any {
    return this.get('lastAt');
  }

  toString(): string {
    return this.image.url();
  }
}

Parse.Object.registerSubclass('Story', Story);