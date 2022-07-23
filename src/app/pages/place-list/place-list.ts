
import { Component, Injector, ViewChild } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { IonContent } from '@ionic/angular';
import { Place } from '../../services/place-service';
import { Category } from 'src/app/services/categories';
import { SubCategory } from 'src/app/services/subcategories';
import { Coordinates } from '@ionic-native/geolocation/ngx';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { Subject, Observable, merge } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { Slide } from 'src/app/services/slide';

@Component({
  selector: 'place-list-page',
  templateUrl: 'place-list.html',
  styleUrls: ['place-list.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class PlaceListPage extends BasePage {

  @ViewChild(IonContent, { static: true }) container: IonContent;
  secondcatid: string = 'all';
  public params: any = {};
  public category: Category;
  public secondcategory: SubCategory;
  public slider: Slide[] = [];

  protected slidesTopEvent: Subject<any>;
  protected slidesTopObservable: Observable<any>;

  protected horizontalScroll: Subject<any>;
  protected onHorizontalScroll: Observable<any>;

  protected categories: Category[] = [];
  protected secondcategories: Category[] = [];
  public skeletonArray: any;
  public places: Place[] = [];
  public location: Coordinates;

  public contentLoaded: Subject<any>;
  public loadAndScroll: Observable<any>;

  slideOpts = {};
  constructor(injector: Injector,
    private geolocationService: GeolocationService,
    private placeService: Place,
    private slideService: Slide,
    private categoryService: Category) {
    super(injector);

    this.skeletonArray = Array(12);
    this.params = Object.assign({}, this.getQueryParams());
    this.params.unit = this.preference.unit;
    this.params.limit = 20;
    this.params.page = 0;
  }

  ngOnInit() {
    this.setupObservables();
    this.loadSlider();
  }
  setupObservables() {

    this.contentLoaded = new Subject();
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
      touchStartPreventDefault: false,
      initialSlide: 0,
      speed: 400
    };
  }

  onContentLoaded() {
    setTimeout(() => {
      this.contentLoaded.next();
    }, 300);
  }

  async ionViewDidEnter() {

    const title = await this.getTrans('PLACES');
    this.setPageTitle(title);

    this.setMetaTags({
      title: title
    });

    if (!this.places.length) {

      await this.showLoadingView({ showOverlay: false });

      if (this.params.category) {
        this.category = new Category;
        this.category.id = this.params.category;
        this.category.fetch();
        this.params.category = this.category;
      }

      if (this.params.nearby) {
        const coords = await this.geolocationService.getCurrentPosition();
        this.location = coords;
        this.params.location = coords;
      } else {
        this.loadLocation();
      }

      this.loadData();
    }
  }



  enableMenuSwipe() {
    return false;
  }

  async loadLocation(): Promise<Coordinates> {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      this.location = coords;
      return coords;
    } catch (error) {
      return null;
    }
  }
  clickEvent(event: string) {
    this.secondcatid = event;
    console.log('scatid', this.secondcatid)
  }
  async loadData() {
    try {
      const places = await this.placeService.load(this.params);
      if (this.params.category) {
        this.secondcategories = await this.categoryService.loadSecond(this.category.id);
      }
      for (let place of places) {
        this.places.push(place);
      }
      this.onRefreshComplete(places);
      if (this.places.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }
      this.onContentLoaded();
    } catch (err) {
      this.showContentView();
      this.onRefreshComplete();
    }
  }

  async loadSlider() {
    try {
      const sliders = await this.slideService.loadCategory(this.params.category);
      for (let slide of sliders) {
        this.slider.push(slide);
      }
      this.onRefreshComplete(this.slider);
      if (this.slider.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }
      this.onContentLoaded();
    } catch (err) {
      this.showContentView();
      this.onRefreshComplete();
    }
  }


  onLoadMore(event: any = {}) {
    this.infiniteScroll = event.target;
    this.params.page++;
    this.loadData();
  }

  async onReload(event: any = {}) {
    this.refresher = event.target;
    this.places = [];
    this.params.page = 0;


    if (this.params.nearby) {
      const coords = await this.loadLocation();
      this.location = coords;
      this.params.location = coords;
    } else {
      this.loadLocation();
    }

    this.loadData();
  }

  onSlidesTopDidLoad() {
    this.slidesTopEvent.next();
  }

  onSlidesTopWillChange() {
    this.slidesTopEvent.next();
  }

  onPlaceTouched(place: Place) {
    this.navigateToRelative('places/' + place.id + '/' + place.slug);
  }

  onSlideTouched(slide: Slide) {

    if (slide.url && slide.type === 'url') {
      this.openUrl(slide.url);
    } else if (slide.place && slide.type === 'place') {
      this.onPlaceTouched(slide.place);
    } else {
      // no match...
    }
  }

}
