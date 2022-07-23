import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Category } from './categories';

@Injectable({
  providedIn: 'root'
})
export class Slide extends Parse.Object {

  constructor() {
    super('SliderImage');
  }

  static getInstance() {
    return this;
  }

  load(params: any = {}): Promise<Slide[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(Slide); 
      if (params.location === 'story') {
        query.equalTo('location', 'story');
      }
      if (params.location === 'slider') {
        query.equalTo('location', 'slider');
      }
      if (params.location === 'home') {
        query.equalTo('location', 'home');
      }
      if (params.location === 'category') {
        query.equalTo('location', 'category');
        query.equalTo('location', params.category);
      }
      query.equalTo('isActive', true);
      query.ascending('sort');

      query.find().then((data: Slide[]) => resolve(data), error => reject(error));
    });
  }

  loadBanner(): Promise<Slide[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(Slide);
      query.equalTo('location','home');    
      query.equalTo('isActive', true);
      query.ascending('sort');

      query.find().then((data: Slide[]) => resolve(data), error => reject(error));
    });
  }

  loadCategory(id:string): Promise<Slide[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(Slide);
      const cat = new Category();
      cat.id = id;
      query.equalTo('location','category');
      query.equalTo('category',cat);
      
      query.equalTo('isActive', true);
      query.ascending('sort');
      query.include('place.category');

      query.find().then((data: Slide[]) => resolve(data), error => reject(error));
    });
  }

  get image(): any {
    return this.get('image');
  }

  get sort(): number {
    return this.get('sort');
  }

  get url(): string {
    return this.get('url');
  }

  get place(): any {
    return this.get('place');
  }

  get type(): any {
    return this.get('type');
  }

  get isActive(): boolean {
    return this.get('isActive');
  }

  get location(): string {
    return this.get('location');
  }

  get category(): Category {
    return this.get('category');
  }

  toString(): string {
    return this.image.url();
  }
}

Parse.Object.registerSubclass('SliderImage', Slide);