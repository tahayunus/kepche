import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Product extends Parse.Object {

  constructor() {
    super('Product');
  }

  static getInstance() {
    return this;
  }



  distance(location: Parse.GeoPoint, unit: string = 'km') {

    if (!location) return null;

    var geoPoint = new Parse.GeoPoint({
      latitude: location.latitude,
      longitude: location.longitude
    });

    if (unit === 'km') {
      return this.location.kilometersTo(geoPoint).toFixed(1) + ' ' + unit;
    } else {
      return this.location.milesTo(geoPoint).toFixed(1) + ' ' + unit;
    }
  }
  load(params: any = {}): Promise<Product[]> {
    const page = params.page || 0;
    const limit = params.limit || 100;
    const distance = params.distance || 2.0;
    const isActive = params.isActive || true;
    const isApprove = params.isApprove || true;

    let query = new Parse.Query(Product);

    query.equalTo('isApprove', true);
    query.equalTo('isActive', true);

    if (params.bounds) {

      const southwest = new Parse.GeoPoint(
        params.bounds[0].latitude,
        params.bounds[0].longitude
      );

      const northeast = new Parse.GeoPoint(
        params.bounds[1].latitude,
        params.bounds[1].longitude
      );

      query.withinGeoBox('location', southwest, northeast);

    } else if (params.location) {

      const point = new Parse.GeoPoint({
        latitude: params.location.latitude,
        longitude: params.location.longitude
      });

      if (params.unit && params.unit === 'km') {
        query.withinKilometers('location', point, distance);
      } else {
        query.withinMiles('location', point, distance);
      }

    } else {
      query.descending('createdAt');
    }
    query.include('place');


    query.skip(page * limit);
    query.limit(limit);

    query.include('category');
    query.include('secondcategory');
    return query.find();
  }
  loadMenu(place: any) {
    let query = new Parse.Query(Product);
    query.equalTo('place', place);
    return query.find();
  }
  

  loadOne(id: string): Promise<Product> {
    const query = new Parse.Query(Product);
    query.equalTo('objectId', id);
    return query.get(id);
  }
  get title(): string {
    return this.get('title');
  }

  get price(): number {
    return this.get('price');
  }

  get place() {
    return this.get('place');
  }

  get image() {
    return this.get('image');
  }

  get quantity(): number {
    return this.get('quantity');
  }

  get ratingCount() {
    return this.get('ratingCount');
  }

  get ratingTotal() {
    return this.get('ratingTotal');
  }

  get isActive() {
    return this.get('isActive');
  }

  get rating() {
    if (!this.ratingCount && !this.ratingTotal) return 0;
    return (this.ratingTotal / this.ratingCount);
  }

  get featuredImageUrl(): string {
    return this.image ?
      this.image.url() :
      this.get('featuredImageUrl')
  }

  get location() {
    return this.get('location');
  }

  set location(val) {
    var geoPoint = new Parse.GeoPoint({
      latitude: val.lat,
      longitude: val.lng
    });
    this.set('location', geoPoint);
  }

}

Parse.Object.registerSubclass('Product', Product);
