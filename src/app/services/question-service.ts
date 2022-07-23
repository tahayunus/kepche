import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class Questions extends Parse.Object {

  constructor() {
    super('Questions');
  }


  load(): Promise<Questions[]> {
    const query = new Parse.Query(Questions);
    query.ascending("sort");
    query.equalTo('isParent', 1);
    query.equalTo('isActive', true);
    return query.find();
  }
  loadRelative(event): Promise<Questions[]> {
    const query = new Parse.Query(Questions);
    query.ascending("sort");
    query.equalTo('isParent', 0);
    query.equalTo('objectId', event);
    query.equalTo('isActive', true);
    return query.find();
  }


  get title(): string {
    return this.get('title');
  }

  set title(val) {
    this.set('title', val);
  }

  get type(): string {
    return this.get('type');
  }

  set type(val) {
    this.set('type', val);
  }

  get options(): any {
    return this.get('options');
  }

  set options(val) {
    this.set('options', val);
  }

  get isActive(): boolean {
    return this.get('isActive');
  }

  set isActive(val) {
    this.set('isActive', val);
  }

  get answers(): any {
    return this.get('answers');
  }

  set answers(val) {
    this.set('answers', val);
  }

  get afterQuestion(): any {
    return this.get('afterQuestion');
  }

  set afterQuestion(val) {
    this.set('afterQuestion', val);
  }
 
}

Parse.Object.registerSubclass('Questions', Questions);
