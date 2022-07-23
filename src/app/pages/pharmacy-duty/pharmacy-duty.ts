
import { Component, Injector, ViewChild } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { IonContent } from '@ionic/angular';
import { Place } from '../../services/place-service';
import { Category } from 'src/app/services/categories';
import { SubCategory } from 'src/app/services/subcategories';
import { Coordinates } from '@ionic-native/geolocation/ngx';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Subject, Observable, merge } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pharmacy-duty-page',
  templateUrl: 'pharmacy-duty.html',
  styleUrls: ['pharmacy-duty.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class PharmacyDutyPage extends BasePage {

  @ViewChild(IonContent, { static: true }) container: IonContent;
  pharmacies: Observable<any>;
  secondcatid: string = 'all';
  placeses : any;
  public params: any = {};
  public category: Category;
  public secondcategory: SubCategory;

  protected categories: Category[] = [];
  protected secondcategories: Category[] = [];
  public skeletonArray: any;
  public places: Place[] = [];
  public location: Coordinates;


  public contentLoaded: Subject<any>;
  public loadAndScroll: Observable<any>;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(injector: Injector,
    private http: HTTP,
    private geolocationService: GeolocationService,
    private placeService: Place,
    private categoryService: Category,
    public httpClient: HttpClient) {
    super(injector);

    this.skeletonArray = Array(12);
    this.params = Object.assign({}, this.getQueryParams());
    this.params.unit = this.preference.unit;
    this.params.limit = 20;
    this.params.page = 0;
  }

  ngOnInit() {
    this.setupObservables();
  }
  setupObservables() {

    this.contentLoaded = new Subject();

    this.loadAndScroll = merge(
      this.container.ionScroll,
      this.contentLoaded,
    );
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
  clickEvent(event: string){
    this.secondcatid = event;
    console.log('scatid', this.secondcatid)
  }
  async loadData() {
    try {
      this.pharmacies = this.httpClient.get('https://art-soft.tech/iyzico/nobetci.php');
      this.pharmacies.subscribe(async data => {
        console.log('my data: ', data);
        for (let pharmacy of data.result) {
          const placeses = await this.placeService.loadPharmacy(this.params, pharmacy.phone);
          console.log('nazmi yine istedi', pharmacy.phone); 
          for (let place of placeses) {
            this.places.push(place);
          }
          this.onRefreshComplete(placeses);
          if (this.places.length) {
            this.showContentView();
          } else {
            this.showEmptyView();
          }
          this.onContentLoaded();     }
        })
    } catch (err) {
      this.showContentView();
      this.onRefreshComplete();
      let message = await this.getTrans('ERROR_NETWORK');
      this.showToast(message);
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

}
