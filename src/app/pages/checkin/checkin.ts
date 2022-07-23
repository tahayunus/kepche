import { Component, Injector, Input } from '@angular/core';
import { Review } from '../../services/review-service';
import { BasePage } from '../base-page/base-page';
import { Place } from 'src/app/services/place-service';
import { User } from 'src/app/services/user-service';
import { Post } from 'src/app/services/post';
import { Photo } from 'src/app/services/photo';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Status } from 'src/app/services/status';
import { ParseFile } from 'src/app/services/parse-file-service';


@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
  styleUrls: ['checkin.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class CheckinPage extends BasePage {

  @Input() place: Place;
  public selectedEmoji: string = "";
  public photo: any = {
    status: '',
    description: '',
    place: '',
    user: '',
  };
  public status: Status[] = [];
  public selected = "";

  public mainUpload: ParseFile;
  public uploads: Array<{ file: ParseFile }>;
  constructor(injector: Injector,
    private reviewService: Review,
    private statusService: Status,
    private photoService: Photo
  ) {
    super(injector);
    this.selectedEmoji;
  }

  ngOnInit() {
    this.getStatus();
    this.setupImages();
  }


  setupImages() {
    this.uploads = Array
      .from({ length: 0 })
      .map(i => { return { file: null } });
  }
  plusImages(event: number){    
    this.uploads = Array
      .from({ length: event + 1 })
      .map(i => { return { file: null } });
  }
  async getStatus() {
    const status = await this.statusService.load();
    status.forEach(s => {
      this.status.push(s);
    });

    console.log("stats", this.status);
  }
  selectEmoji(event:string){
    this.selectedEmoji = event;
  }
  loadStatusImages() {
    setTimeout(function () {
      let radios = document.getElementsByClassName('alert-radio-label');
      console.log("aynennn", radios);

      for (let index = 0; index < radios.length; index++) {
        let element = radios[index];
        console.log("emojii", this.status);

        element.innerHTML = element.innerHTML.concat('<img class="country-image" style="width: 30px;height:16px;" src="' + this.status[index].emoji._url + '" />');
      }
    }, 2000);
    console.log("aaaa");
  }

  enableMenuSwipe() {
    return false;
  }

  async onSubmit() {
    console.log("photo", this.selected);

    try {
      await this.showLoadingView({ showOverlay: false });
      this.photo.type = 1;
      this.photo.user = User.getCurrent();
      const query = new Status();
      query.id = this.selected;
      this.photo.status = query;
      this.photo.place = this.place;
      const photo = await this.photoService.create(this.photo);
      this.showContentView();
      this.onDismiss();

    } catch (err) {
      console.log("errr", err);
      this.showContentView();

      if (err.code === 5000) {
        this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(str => this.showToast(str));
      } else {
        this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      }
    }
  }

  onDismiss(review: Review = null) {
    this.modalCtrl.dismiss(review);
  }

}
