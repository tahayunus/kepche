import { Component, Injector, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { BasePage } from '../base-page/base-page';
import * as Parse from 'parse';
import { Slide } from '../../services/slide';
import { Category } from '../../services/categories';
import { Place } from '../../services/place-service';
import { Subject, Observable, merge, Timestamp } from 'rxjs';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { Installation } from 'src/app/services/installation';
import { WindowRef } from 'src/app/services/window-ref';
import { StoryDetailPage } from '../story-detail/story-detail';
import { Story } from 'src/app/services/story';
import { User } from 'src/app/services/user-service';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import OneSignal from 'onesignal-cordova-plugin';
import { Property } from 'src/app/services/property';
import { LocalStorage } from 'src/app/services/local-storage';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomePage extends BasePage {

  @ViewChild(IonContent, { static: true }) container: IonContent;
public userid: string;
  public user: User;
  lPlaces = [];
  arrayTitle = [];
  public lang: any;
  public langid = 0;
  protected slides: Slide[] = [];
  protected stories: Story[] = [];
  protected banners: Slide[] = [];
  public properties: Property[] = [];

  protected likePlaces: Place[] = [];
  protected featuredPlaces: Place[] = [];
  protected newPlaces: Place[] = [];
  protected randomPlaces: Place[] = [];
  protected nearbyPlaces: Place[] = [];
  protected nearbyProducts: Product[] = [];
  protected momentPlaces: Place[] = [];

  protected categories: Category[] = [];

  protected randomParams: any = {};

  protected slideOpts = {};
  protected skeletonArray: any;

  protected location: any;

  protected slidesTopEvent: Subject<any>;
  protected slidesTopObservable: Observable<any>;

  protected horizontalScroll: Subject<any>;
  protected onHorizontalScroll: Observable<any>;

  protected contentLoaded: Subject<any>;
  protected loadAndScroll: Observable<any>;

  constructor(injector: Injector,
    private geolocationService: GeolocationService,
    private installationService: Installation,
    private windowRef: WindowRef,
    private placeService: Place,
    public backgroundMode: BackgroundMode,
    private backgroundGeolocation: BackgroundGeolocation,
    private categoryService: Category,
    private slideService: Slide,
    private storyService: Story,
    private productService: Product,
    private storage: LocalStorage
  ) {
    super(injector);

    this.skeletonArray = Array(6);
  }

  enableMenuSwipe(): boolean {
    return false;
  }

  async ionViewDidEnter() {
    const title = 'Kepche';
    this.setPageTitle(title);

    this.setMetaTags({
      title: title
    });
  }
  async momentsPlace() {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      if (coords) {
        this.location = coords;
        this.updateInstallation();
        this.momentPlaces = await this.placeService.loadMoment({
          location: this.location
        });
        console.log('askvkjasdf', this.momentPlaces);
      }
    } catch (err) {
      console.warn(err);
    }
  }
  async ngOnInit() {

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
    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    this.setupObservables();
    this.setupSliders();

    await this.showLoadingView({ showOverlay: false });
    this.loadData();
    this.loadSlides();
    this.momentsPlace();
    this.loadNearbyPlaces();
    this.loadNearbyProducts();
    this.loadHomeBanner();
    if (this.user) {
      this.loadLikePlaces();
      this.properties;
    }
  }

  onReload(event: any = {}) {
    this.refresher = event.target;
    this.showLoadingView({ showOverlay: false });
    this.loadData();
    this.loadNearbyPlaces();
    this.loadHomeBanner();
    if (this.user) {
      this.loadLikePlaces();
      this.properties;
    }
  }
  onScroll() {
    this.horizontalScroll.next();
  }

  onSlidesTopDidLoad() {
    this.slidesTopEvent.next();
  }

  onSlidesTopWillChange() {
    this.slidesTopEvent.next();
  }

  onContentLoaded() {
    this.contentLoaded.next();
  }

  setupObservables() {

    this.slidesTopEvent = new Subject();
    this.horizontalScroll = new Subject();
    this.contentLoaded = new Subject();

    this.loadAndScroll = merge(
      this.container.ionScroll,
      this.horizontalScroll,
      this.contentLoaded,
      this.slidesTopEvent,
    );
  }

  setupSliders() {
    this.slideOpts = {
      autoplay: {
        delay: 7000
      },
      spaceBetween: 16,
      zoom: false,
      touchStartPreventDefault: false
    };
  }

  async openStoryModal(event) {
    const modal = await this.modalCtrl.create({
      component: StoryDetailPage,
      componentProps: { image: event },
    });
    modal.present();
    setTimeout(() => {
      modal.dismiss();
    }, 9000);

    await modal.present();

    await this.dismissLoadingView();
  }

  async loadData() {

    try {


      const data: any = await Parse.Cloud.run('getHomePageData');
      const category = await this.categoryService.load();
      console.log("data2", this.slides);

      this.newPlaces = data.newPlaces;
      this.featuredPlaces = data.featuredPlaces;
      this.categories = category;

      console.log(data)

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

  async loadSlides() {
    this.updateInstallation();
    this.slides = await this.slideService.load({
      location: 'slider'
    });
  }

  async loadLikePlaces() {
    try {
      this.likePlaces = [];
      const places = await this.placeService.loadStories();
      for (let place of places) {
        this.likePlaces.push(place);
      }
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

  async loadStories(event: any) {
    this.stories = await this.storyService.load({
      place: event
    });
  }

  async loadHomeBanner() {
    this.updateInstallation();
    this.banners = await this.slideService.load({
      location: 'home'
    });
    console.log('banner', this.stories)
  }
  loadMoreRandomPlaces() {
    Parse.Cloud.run('getRandomPlaces').then((places: Place[]) => {
      for (const place of places) {
        this.randomPlaces.push(place);
      }
      this.onRefreshComplete();
    }, () => {
      this.onRefreshComplete();
      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
    });
  }

  backgroundGeo() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

    this.backgroundGeolocation.configure(config)
      .then(() => {

        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
          console.log(location);
          this.backgroundGeolocation.finish();
        });

      });

    // start recording location
    this.backgroundGeolocation.start();

    this.backgroundMode.enable();
    this.backgroundMode.on("activate").subscribe(() => {
      this.loadNearbyPlaces();
      if (this.nearbyPlaces.length > 0) {
        OneSignal.postNotification('{"app_id":"235b471a-95af-4c74-aee3-be05bb96348b","contents"=>{en:"Hello !",tr:"Yakınınızda ' + this.nearbyPlaces.length + ' tane mekan var!",included_segments: ["Test"]}}');
      }
    });

    console.log("denemeee", this.backgroundGeolocation);
    console.log("asdads", this.backgroundGeolocation.getCurrentLocation());


  }

  async updateInstallation() {
    try {
      const objWindow = this.windowRef.nativeWindow;
      if (objWindow.ParsePushPlugin) {
        const location = this.geolocationService.toParseGeoPoint(this.location);
        const id = await this.installationService.getId();
        const res = await this.installationService.save(id, { location })
        console.log('Installation updated', res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loadNearbyPlaces() {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      if (coords) {
        this.location = coords;
        this.updateInstallation();
        this.nearbyPlaces = await this.placeService.load({
          location: this.location,
          limit: 12
        });
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async loadNearbyProducts() {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      if (coords) {
        this.location = coords;
        this.updateInstallation();
        this.nearbyProducts = await this.productService.load({
          location: this.location,
          limit: 12
        });
        console.log('yakındaki yemekler', this.nearbyPlaces);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  onLoadMore(event: any = {}) {
    this.infiniteScroll = event.target;
    this.randomParams.page++;
    this.loadMoreRandomPlaces();
  }

  onPlaceTouched(place: Place) {
    this.navigateToRelative('places/' + place.id);
  }
  onCategoryTouched(category: Category) {
    this.navigateToRelative('places', { category: category.id });
  }

  onSlideTouched(slide: Slide) {

    if (slide.url && slide.type === 'url') {
      this.openUrl(slide.url);
    } else if (slide.place && slide.type === 'place') {
      this.onPlaceTouched(slide.place);
    } else if (slide.category && slide.type === 'category') {
      this.onCategoryTouched(slide.category);
    } else {
      // no match...
    }
  }

  onStoryTouched() {
  }

}
