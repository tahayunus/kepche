import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Setting extends Parse.Object {

  constructor() {
    super('Setting');
  }

  static getInstance() {
    return this;
  }


  load(): Promise<Setting> {
    return new Promise((resolve, reject) => {      
      let query = new Parse.Query(Setting);
      query.first().then((data: Setting) => resolve(data), error => reject(error));
    });
  }
  
  get social() {
    return this.get('social');
  }



}

Parse.Object.registerSubclass('Setting', Setting);