import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class User extends Parse.User {

  constructor() {
    super('_User');
  }

  static getInstance() {
    return this;
  }

  static getCurrent() {
    return User.current() as User;
  }

  isLoggedInViaFacebook() {
    return this.authData && this.authData.facebook;
  }

  create(data: any = {}): Promise<User> {
    return this.signUp(data);
  }

  signIn(data: any = {}): Promise<User> {
    this.username = data.username;
    this.password = data.password;
    return this.logIn();
  }

  loadList(id: any): Promise<User[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(User);

      query.containedIn('objectId', id);

      query.find().then((data: User[]) => resolve(data), error => reject(error));
    });
  }

  load(params: any = {}): Promise<User[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(User);
      if (params.userid) {
        query.equalTo('objectId', params.userid);
      }
      if (params.search) {
        query.fullText("name", params.search);
      }
      query.include('properties');
      query.find().then((data: User[]) => resolve(data), error => reject(error));
    });
  }

  loadOne(id: string): Promise<User[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(User);
      query.equalTo('objectId', id);
      query.find().then((data: User[]) => resolve(data), error => reject(error));
    });
  }

  loadFromList(id: any): Promise<User[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(User);
      query.containedIn('objectId', id);
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: User[]) => resolve(data), error => reject(error));
    });
  }


  logout() {
    return User.logOut();
  }

  recoverPassword(email: string) {
    return User.requestPasswordReset(email);
  }

  loginViaFacebook(): Promise<User> {
    return new Promise((resolve, reject) => {
      (Parse.FacebookUtils.logIn(null) as any)
        .then((user: User) => resolve(user), (err: any) => reject(err));
    });
  }

  loginWith(provider: string, authData: any = {}): Promise<User> {
    const user: any = new User;
    return user._linkWith(provider, authData);
  }

  isFacebookLinked(): boolean {
    return Parse.FacebookUtils.isLinked(Parse.User.current());
  }

  linkFacebook(authData: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      Parse.FacebookUtils.link(Parse.User.current(), authData, {
        success: (res: any) => resolve(res), error: (err: any) => reject(err)
      });
    });
  }

  unlinkFacebook(): Promise<any> {
    return new Promise((resolve, reject) => {
      Parse.FacebookUtils.unlink(Parse.User.current(), {
        success: (res: any) => resolve(res), error: (err: any) => reject(err)
      });
    });
  }

  get name(): string {
    return this.get('name');
  }
  get roleName(): string {
    return this.get('roleName');
  }

  set name(val) {
    this.set('name', val);
  }

  get email(): string {
    return this.get('email');
  }

  set email(val) {
    this.set('email', val);
  }

  get username(): string {
    return this.get('username');
  }

  set username(val) {
    this.set('username', val);
  }

  get password(): string {
    return this.get('password');
  }

  set password(val) {
    this.set('password', val);
  }

  get photo(): any {
    return this.get('photo');
  }

  set photo(val) {
    this.set('photo', val);
  }

  get followers(): any {
    return this.get('followers');
  }

  set followers(val) {
    this.set('followers', val);
  }

  get following(): any {
    return this.get('following');
  }

  set following(val) {
    this.set('following', val);
  }

  get isSecret(): any {
    return this.get('isSecret');
  }

  set isSecret(val) {
    this.set('isSecret', val);
  }

  get authData(): any {
    return this.get('authData');
  }

  set authData(val) {
    this.set('authData', val);
  }

  get city(): string {
    return this.get('city');
  }

  set address(val) {
    this.set('address', val);
  }

  get address(): string {
    return this.get('address');
  }

  set city(val) {
    this.set('city', val);
  }

  get searchData(): any {
    return this.get('searchData');
  }

  set searchData(val) {
    this.set('searchData', val);
  }

  get properties(): any {
    return this.get('properties');
  }

  set properties(val) {
    this.set('properties', val);
  }
  
  get smsNot(): any {
    return this.get('smsNot');
  }
  
  set smsNot(val) {
    this.set('smsNot',val);
  }
  
  get phoneNot(): any {
    return this.get('phoneNot');
  }
  
  set phoneNot(val) {
    this.set('phoneNot',val);
  }
  
  get emailNot(): any {
    return this.get('emailNot');
  }
  
  set mapIcon(val) {
    this.set('mapIcon',val);
  }
  
  get mapIcon(): number {
    return this.get('mapIcon');
  }
  
  set emailNot(val) {
    this.set('emailNot',val);
  }
}

Parse.Object.registerSubclass('_User', User);
