import { Component, Injector, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Subject, Observable, merge } from 'rxjs';
import { BasePage } from '../base-page/base-page';
import { Place } from '../../services/place-service';
import * as Parse from 'parse';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { Coordinates } from '@ionic-native/geolocation/ngx';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { User } from 'src/app/services/user-service';
import { Property } from 'src/app/services/property';
import { LocalStorage } from 'src/app/services/local-storage';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  styleUrls: ['search.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class SearchPage extends BasePage {

  @ViewChild(IonContent, { static: true }) container: IonContent;
  protected params: any = {};
  public user: User;
  public userList = [];
  public placeList = [];
  public activityList = [];
  public lang: any;
  public langid: number;
  public skeletonArray: any;
  public type: string = "all";
  public content: string = "discover";

  protected propertiesPlaces: Place[] = [];
  protected newPlaces: Place[] = [];
  protected randomPlaces: Place[] = [];
  protected featuredPlaces: Place[] = [];
  protected nearbyPlaces: Place[] = [];
  public places: Place[] = [];
  public myPlaces: Place[] = [];
  public likePlaces: Place[] = [];
  public users: User[] = [];
  public myProperties = [];
  public myProp = [];
  public properties: Property[] = [];
  public myPropertiesPlaces: Place[] = [];
  public placesLog: Place[] = [];
  public usersLog: User[] = [];

  public results = [];


  public location: Coordinates;

  public notSearchYet = true;

  protected horizontalScroll: Subject<any>;
  protected onHorizontalScroll: Observable<any>;
  public contentLoaded: Subject<any>;
  public loadAndScroll: Observable<any>;

  constructor(injector: Injector,
    private geolocationService: GeolocationService,
    private placeService: Place,
    private userService: User,
    private storage: LocalStorage,
    private propertyService: Property
  ) {
    super(injector);
    this.skeletonArray = Array(12);
    this.params.limit = 100;
    this.params.page = 0;
  }

  enableMenuSwipe(): boolean {
    return false;
  }

  async ngOnInit() {
    this.user = User.getCurrent();
    console.log('Kişi', this.user);
    this.lang = await this.storage.getLang();
    console.log('Dil', this.lang);
    if (this.lang === 'tr') {
      this.langid = 0;
    }
    if (this.lang === 'en') {
      this.langid = 1;
    }
    if (this.lang === 'es') {
      this.langid = 2;
    }
    if (this.lang === 'de') {
      this.langid = 3;
    }
    if (this.lang === 'ru') {
      this.langid = 4;
    }
    if (this.lang === 'fr') {
      this.langid = 5;
    }
    if (this.lang === 'ar') {
      this.langid = 6;
    }
    if (this.lang === 'fl') {
      this.langid = 7;
    }
    console.log('Dil Id', this.langid);
    this.setupObservables();
    this.type;
    this.content;
    this.loadProperties();
    this.loadMyPlaces();
    this.loadLikePlaces();
    this.properties;
  }

  async loadMyPlaces() {

  }
  onScroll() {
    this.horizontalScroll.next();
  }
  contentChange(event) {
    this.content = event;
  }

  async loadLikePlaces() {

    try {

      const places = await this.placeService.loadFavorites(this.params);

      for (let place of places) {
        this.likePlaces.push(place);
      }
      console.log('Favorilerim', this.likePlaces);

      if (this.likePlaces.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

      this.onContentLoaded();

      this.onRefreshComplete(places);
      
    } catch (error) {
      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      this.showContentView();
      this.onRefreshComplete();
    }
  }
  async loadProperties() {
    const myProp = this.user.properties;
    for (let element of myProp) {
      this.myProperties.push(element.id);
    };
    const properties = await this.propertyService.load({
      cid: this.myProperties
    });
    for (let property of properties) {
      this.properties.push(property)
    }
    console.log('kasjd', this.properties);
    const myPPlaces = await this.placeService.loadProperties({
      property: this.properties
    });
    
    for (let i of myPPlaces) {
      this.propertiesPlaces.push(i)
    }
    
    console.log('property place', this.propertiesPlaces);
  }
  async getLog() {
    const usr = User.getCurrent();
    let usrId = [];
    let plcId = [];
    usr.searchLog.forEach(e => {
      if (e.type === 'user') {
        usrId.push(e.id);
      }
    });

    usr.searchLog.forEach(e => {
      if (e.type === 'place') {
        plcId.push(e.id);
      }
    });

    this.placesLog = await this.placeService.loadList(plcId);
    this.usersLog = await this.userService.loadList(usrId);

    console.log("usrr", this.usersLog);
    console.log("plaecs", this.placesLog)

  }
  changeType(event: string) {
    this.type = event;
    console.log('search_history', event);
  }
  setupObservables() {

    this.contentLoaded = new Subject();

    this.loadAndScroll = merge(
      this.container.ionScroll,
      this.contentLoaded,
    );
  }

  async loadNearbyPlaces() {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      if (coords) {
        this.location = coords;
        this.nearbyPlaces = await this.placeService.load({
          location: this.location,
          limit: 12
        });
      }
    } catch (err) {
      console.warn(err);
    }
  }
  onContentLoaded() {
    setTimeout(() => {
      this.contentLoaded.next();
    }, 300);
  }

  async ionViewDidEnter() {
    const title = await this.getTrans('SEARCH');
    this.setPageTitle(title);

    this.setMetaTags({
      title: title
    });

    this.loadLocation();
  }

  async loadLocation() {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      this.location = coords;
    } catch (err) {
      console.warn(err);
    }
  }
  async loadDiscover() {

    try {


      const data: any = await Parse.Cloud.run('getHomePageData');

      this.randomPlaces = data.randomPlaces;
      this.newPlaces = data.newPlaces;
      this.featuredPlaces = data.featuredPlaces;

      console.log('discover', data)

      this.onRefreshComplete();
      this.showContentView();
      this.onContentLoaded();

    } catch (error) {

      this.showErrorView();
      this.onRefreshComplete();

      this.translate.get('ERROR_NETWORK')
        .subscribe(str => this.showToast(str));

      if (error.code === 209) {
        this.events.publish('user:logout');
      }

    }
  }
  async loadData(event: any = {}) {

    this.refresher = event.target;

    try {

      const data: any = await Parse.Cloud.run('searchData');
      data.places.forEach(p => {
        if (p.title.toLocaleLowerCase().search(this.params.search) !== -1) {
          this.places.push(p);
        }
      })
      data.users.forEach(p => {
        if ((p.name.toLocaleLowerCase().search(this.params.search) !== -1) || (p.username.toLocaleLowerCase().search(this.params.search) !== -1)) {
          this.users.push(p);
        }
      })

      if (this.users.length || this.places.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

      this.onContentLoaded();

      this.onRefreshComplete(this.places);

      this.notSearchYet = false;

    } catch (err) {
      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      this.showContentView();
      this.onRefreshComplete();
    }
  }

  async placeClick(id) {
    const query = new User();
    query.id = User.getCurrent().id;
    const searchLog = await User.getCurrent().searchLog;
    searchLog.push({
      "id": id,
      "type": "place"
    })
    query.set("searchLog", searchLog);
    query.save();
  }

  async userClick(id) {
    const query = new User();
    query.id = User.getCurrent().id;
    const searchLog = await User.getCurrent().searchLog;
    searchLog.push({
      "id": id,
      "type": "user"
    })
    query.set("searchLog", searchLog);
    query.save();
  }

  async onSearch(e: any = {}) {
    if (e.target.value.length >= 3) {
      this.content = 'search';
      this.params.search = e.target.value.toLocaleLowerCase();
      this.loadData();
    } else {
      this.content = 'history';
      console.log('content', this.content);
      this.getLog();
      this.users = [];
      this.places = [];
    }
  }

}
