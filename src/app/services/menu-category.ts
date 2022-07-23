import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
    providedIn: 'root'
})
export class MenuCategory extends Parse.Object {

    constructor() {
        super('MenuCategory');
    }

    static getInstance() {
        return this;
    }

    load(params: any = {}): Promise<MenuCategory[]> {
        const query = new Parse.Query(MenuCategory);
        if (params.place) {
            query.equalTo('place', params.place);
        }
        query.equalTo('isActive', true);
        query.ascending('sort');
        return query.find();
    }

    get title(): string {
        return this.get('title');
    }



}

Parse.Object.registerSubclass('MenuCategory', MenuCategory);
