import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { environment } from 'src/environments/environment';
import { Category } from './categories';

@Injectable({
  providedIn: 'root'
})
export class Place extends Parse.Object {

  constructor() {
    super('Place');
  }

  static getInstance() {
    return this;
  }

  getSlug(): string {
    let slug = '1/home/places/' + this.id;

    if (this.slug) {
      slug += '/' + this.slug;
    }

    return slug;
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

  like(place: Place) {
    return Parse.Cloud.run('likePlace', { placeId: place.id });
  }

  isLiked(place: Place): Promise<boolean> {
    return Parse.Cloud.run('isPlaceLiked', { placeId: place.id });
  }

  isStarred(place: Place): Promise<boolean> {
    return Parse.Cloud.run('isPlaceStarred', { placeId: place.id });
  }

  loadOne(id: string): Promise<Place> {
    const query = new Parse.Query(Place);
    query.equalTo('status', 'Approved');
    query.include('category');
    query.include('subcategory');
    return query.get(id);
  }

  loadList(id: any): Promise<Place[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(Place);

      query.containedIn('objectId', id);

      query.find().then((data: Place[]) => resolve(data), error => reject(error));
    });
  }

  loadMyPlace(userid: string): Promise<Place[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(Place);

      query.equalTo('userid', userid);

      query.find().then((data: Place[]) => resolve(data), error => reject(error));
    });
  }
  load(params: any = {}): Promise<Place[]> {

    const page = params.page || 0;
    const limit = params.limit || 100;
    const distance = params.distance || 2.0;
    const status = params.status || 'Approved';

    const query = new Parse.Query(Place);

    if (Array.isArray(status)) {
      query.containedIn('status', status);
    } else {
      query.equalTo('status', status);
    }

    if (params.search) {
      query.fullText('title', params.search)
    }

    if (params.phone) {
      query.equalTo('phone', params.phone);
    }

    if (params.featured) {
      query.equalTo('isFeatured', true);
    }

    if (params.owner) {
      query.equalTo('owner', params.owner);
    }

    if (params.canonical && params.canonical !== '') {
      query.contains('canonical', params.canonical);
    }

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

    query.skip(page * limit);
    // query.limit(limit);

    query.include('category');
    query.include('secondcategory');

    return query.find();
  }

  loadMoment(params: any = {}): Promise<Place[]> {

    const page = params.page || 0;
    const limit = params.limit || 1;
    const distance = params.distance || 0.1;
    const status = params.status || 'Approved';

    const query = new Parse.Query(Place);

    if (Array.isArray(status)) {
      query.containedIn('status', status);
    } else {
      query.equalTo('status', status);
    }

    if (params.category) {
      query.equalTo('category', params.category);
    }

    if (params.search) {
      query.fullText('title', params.search)
    }

    if (params.subcategory) {
      query.equalTo('secondcategory', params.secondcategory);
    }

    if (params.phone) {
      query.equalTo('phone', params.phone);
    }

    if (params.featured) {
      query.equalTo('isFeatured', true);
    }

    if (params.owner) {
      query.equalTo('owner', params.owner);
    }

    if (params.canonical && params.canonical !== '') {
      query.contains('canonical', params.canonical);
    }

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

    query.skip(page * limit);
    query.limit(limit);

    query.include('category');
    query.include('secondcategory');

    return query.find();
  }


  loadSeach(params: any = {}): Promise<Place[]> {

    const status = params.status || 'Approved';

    const query = new Parse.Query(Place);

    if (Array.isArray(status)) {
      query.containedIn('status', status);
    } else {
      query.equalTo('status', status);
    }

    if (params.category) {
      query.equalTo('category', params.category);
    }

    if (params.search) {
      query.contains('title', params.search)
    }

    if (params.subcategory) {
      query.equalTo('secondcategory', params.secondcategory);
    }

    if (params.phone) {
      query.equalTo('phone', params.phone);
    }

    if (params.featured) {
      query.equalTo('isFeatured', true);
    }

    if (params.user) {
      query.equalTo('user', params.user);
    }

    if (params.canonical && params.canonical !== '') {
      query.contains('canonical', params.canonical);
    }

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

    } else {
      query.descending('createdAt');
    }

    query.include('category');
    query.include('secondcategory');
    query.doesNotExist('deletedAt');

    return query.find();
  }

  loadTaxi(params: any = {}): Promise<Place[]> {

    const page = params.page || 0;
    const limit = params.limit || 100;
    const distance = params.distance || 100;
    const status = params.status || 'Approved';

    const query = new Parse.Query(Place);

    if (Array.isArray(status)) {
      query.containedIn('status', status);
    } else {
      query.equalTo('status', status);
    }



    query.descending('createdAt');


    query.skip(page * limit);
    query.limit(limit);

    const taxiCat = new Category;
    taxiCat.id = "HRtsnghbFe";

    query.equalTo('secondcategory', taxiCat);

    query.include('category');
    query.include('secondcategory');
    query.doesNotExist('deletedAt');

    return query.find();
  }

  loadPharmacy(params: any = {}, phone): Promise<Place[]> {

    const page = params.page || 0;
    const limit = params.limit || 100;
    const distance = params.distance || 100;
    const status = params.status || 'Approved';

    const query = new Parse.Query(Place);

    if (Array.isArray(status)) {
      query.containedIn('status', status);
    } else {
      query.equalTo('status', status);
    }

    if (params.category) {
      query.equalTo('category', params.category);
    }

    if (params.subcategory) {
      query.equalTo('secondcategory', params.secondcategory);
    }

    if (params.featured) {
      query.equalTo('isFeatured', true);
    }

    if (params.user) {
      query.equalTo('user', params.user);
    }

    if (params.canonical && params.canonical !== '') {
      query.contains('canonical', params.canonical);
    }

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

    query.skip(page * limit);
    query.limit(limit);

    query.equalTo('spacialId', phone);
    query.include('category');
    query.include('secondcategory');
    query.doesNotExist('deletedAt');

    return query.find();
  }

  loadFavorites(params: any = {}): Promise<Place[]> {

    const page = params.page || 0;
    const limit = params.limit || 100;

    const query = new Parse.Query(Place);
    query.equalTo('status', 'Approved');
    query.equalTo('likes', Parse.User.current());

    query.skip(page * limit);
    query.limit(limit);
    query.include('category');
    query.include('secondcategory');
    query.doesNotExist('deletedAt');

    return query.find();
  }

  loadProperties(params: any = {}): Promise<Place[]> {

    const page = params.page || 0;
    const limit = params.limit || 100;

    const query = new Parse.Query(Place);
    query.equalTo('status', 'Approved');
    if (params.property) {
      if (Array.isArray(params.property)) {
        query.containedIn('properties', params.property);
      }
    }

    query.skip(page * limit);
    query.limit(limit);
    query.include('category');
    query.include('secondcategory');
    query.doesNotExist('deletedAt');

    return query.find();
  }

  loadStories(params: any = {}): Promise<Place[]> {

    const page = params.page || 0;
    const limit = params.limit || 100;

    const query = new Parse.Query(Place);
    query.equalTo('status', 'Approved');
    query.equalTo('likes', Parse.User.current());

    query.skip(page * limit);
    query.limit(limit);
    query.include('category');
    query.include('secondcategory');
    query.doesNotExist('deletedAt');

    return query.find();
  }

  get title(): string {
    return this.get('title');
  }

  set title(val) {
    this.set('title', val);
  }

  get userid(): string {
    return this.get('userid');
  }

  set userid(val) {
    this.set('userid', val);
  }

  get description(): string {
    return this.get('description');
  }

  set description(val) {
    this.set('description', val);
  }

  get phone(): string {
    return this.get('phone');
  }

  set phone(val) {
    this.set('phone', val);
  }

  get website(): string {
    return this.get('website');
  }

  set website(val) {
    this.set('website', val);
  }

  get address(): string {
    return this.get('address');
  }

  set address(val) {
    this.set('address', val);
  }

  get category() {
    return this.get('category');
  }

  set category(val) {
    this.set('category', val);
  }

  get owner() {
    return this.get('owner');
  }

  set owner(val) {
    this.set('owner', val);
  }

  get secondcategory() {
    return this.get('secondcategory');
  }

  set secondcategory(val) {
    this.set('secondcategory', val);
  }

  get image() {
    return this.get('image');
  }

  set image(val) {
    this.set('image', val);
  }

  get storyImage() {
    return this.get('storyImage');
  }

  set storyImage(val) {
    this.set('storyImage', val);
  }

  get images() {
    return this.get('images');
  }

  set images(val) {
    this.set('images', val);
  }

  get menuType(): string {
    return this.get('menuType');
  }

  set menuType(val) {
    this.set('menuType', val);
  }

  get menuLocal() {
    return this.get('menuLocal');
  }

  set menuLocal(val) {
    this.set('menuLocal', val);
  }

  get menuUrl(): string {
    return this.get('menuUrl');
  }

  set menuUrl(val) {
    this.set('menuUrl', val);
  }

  get from(): string {
    return this.get('from');
  }

  set from(val) {
    this.set('from', val);
  }

  get reference(): string {
    return this.get('reference');
  }

  set reference(val) {
    this.set('reference', val);
  }

  get serverImages() {
    return this.get('serverImages');
  }

  set serverImages(val) {
    this.set('serverImages', val);
  }

  get types() {
    return this.get('types');
  }

  set types(val) {
    this.set('types', val);
  }

  get properties() {
    return this.get('properties');
  }

  set properties(val) {
    this.set('properties', val);
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

  get imageTwo() {
    return this.get('imageTwo');
  }

  get imageThree() {
    return this.get('imageThree');
  }

  get imageFour() {
    return this.get('imageFour');
  }

  get imageThumb() {
    return this.get('imageThumb');
  }

  set imageThumb(val) {
    this.set('imageThumb', val);
  }

  get ratingCount() {
    return this.get('ratingCount');
  }

  get ratingTotal() {
    return this.get('ratingTotal');
  }

  get status() {
    return this.get('status');
  }

  get facebook() {
    return this.get('facebook');
  }

  get youtube() {
    return this.get('youtube');
  }

  get instagram() {
    return this.get('instagram');
  }

  get longDescription() {
    return this.get('longDescription');
  }

  get slug() {
    return this.get('slug');
  }

  get rating() {
    if (!this.ratingCount && !this.ratingTotal) return 0;
    return (this.ratingTotal / this.ratingCount);
  }

  get featuredImageUrl(): string {
    if (this.get('from') === 'app') {
      return this.imageThumb ?
        this.imageThumb.url() :
        this.get('featuredImageUrl')
    } else if(this.get('from') === 'local'){
      return environment.imageServer+this.reference+'/image_1.webp';
    }
  }

  get imageOneUrl(): string {
    return this.imageTwo ?
      this.imageTwo.url() :
      this.get('imageOneUrl')
  }

  get imageTwoUrl(): string {
    return this.imageThree ?
      this.imageThree.url() :
      this.get('imageTwoUrl')
  }

  get imageThreeUrl(): string {
    return this.imageFour ?
      this.imageFour.url() :
      this.get('imageThreeUrl')
  }

}

Parse.Object.registerSubclass('Place', Place);
