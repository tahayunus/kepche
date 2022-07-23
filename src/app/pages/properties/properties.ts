import { Component, Injector, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { BasePage } from '../base-page/base-page';
import { Post } from '../../services/post';
import { Subject, Observable, merge } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { Property } from 'src/app/services/property';
import { LocalStorage } from 'src/app/services/local-storage';
import { User } from 'src/app/services/user-service';

@Component({
  selector: 'properties-page',
  templateUrl: 'properties.html',
  styleUrls: ['properties.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class PropertiesPage extends BasePage {

  @ViewChild(IonContent, { static: true }) container: IonContent;
  public user: User;
  public myProperties = [];
  protected params: any = {};
  arrayTitle = [];
  public lang: any;
  public langid: number;
  public skeletonArray: any;
  public properties: Property[] = [];

  public contentLoaded: Subject<any>;
  public loadAndScroll: Observable<any>;

  constructor(injector: Injector,
    private propertyService: Property,
    private storage: LocalStorage,
    private userService : User
  ) {
    super(injector);

    this.skeletonArray = Array(12);
    this.params.limit = 100;
    this.params.page = 0;
    this.langid;
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
    this.loadProperties();
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
  async loadMyProperties() {
  }
  async ionViewDidEnter() {
    if (!this.properties.length) {
      await this.showLoadingView({ showOverlay: false });
      this.loadProperties();
    }
    const title = await this.getTrans('POSTS');
    this.setPageTitle(title);

    this.setMetaTags({
      title: title
    });
  }

  async loadProperties() {
    const myProp = this.user.properties;
    for (let element of myProp) {
      this.myProperties.push(element.id);
    };
    const properties = await this.propertyService.load({
      mid: this.myProperties
    });
    for (let property of properties) {
      this.properties.push(property)
    }
    this.properties.forEach(t => {
      this.arrayTitle.push(t.title);
    });
  }
  addProperties(event: string, i: number) {
    User.getCurrent().properties.push({
      "id": event
    });
    User.getCurrent().save();
    console.log('hangisi', this.properties[i]);
    this.properties = [];
    this.loadProperties();
  }

  onReload(event: any = {}) {
    this.refresher = event.target;
    this.properties = [];
    this.params.page = 0;
    this.loadProperties();
  }

  onLoadMore(event: any = {}) {
    this.infiniteScroll = event.target;
    this.params.page++;
    this.loadProperties();
  }

}
