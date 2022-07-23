
import { Component, Injector } from '@angular/core';
import { Place } from 'src/app/services/place-service';
import { User } from 'src/app/services/user-service';
import { BasePage } from '../base-page/base-page';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-map-modal',
  templateUrl: 'map-modal.html',
  styleUrls: ['map-modal.scss']
})
export class MapModalPage extends BasePage {
  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }
  place: any;
  public user: User;
  public isLiked: boolean = false;
  public isStarred: boolean = false;
  constructor(
    injector: Injector,
    private placeService: Place,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.place;
    console.log('ne gelmiş', this.place);
    

    if (User.getCurrent()) {
      this.checkIfIsLiked();
      this.checkIfIsStarred();
    }
  }
  

  async checkIfIsLiked() {
    try {
      const isLiked = await this.placeService.isLiked(this.place)
      this.isLiked = isLiked;
    } catch (err) {
      console.warn(err.message);
    }
  }

  async checkIfIsStarred() {
    try {
      const isStarred = await this.placeService.isStarred(this.place)
      this.isStarred = isStarred;
    } catch (err) {
      console.warn(err.message);
    }
  }
  onDismiss() {
    return this.modalCtrl.dismiss();
  }
  goPlace(id) {
    this.router.navigate(['index/map/' + id]);
    this.onDismiss();
  }



  async openSignInModal() {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: SignInPage
    });

    await modal.present();

    await this.dismissLoadingView();

  }
  onLike() {
    if (User.getCurrent()) {
      this.isLiked = !this.isLiked;
      this.placeService.like(this.place);
    } else {
      this.openSignInModal();
    }
  }
  async onDirectionsButtonTouched(latitude, longitude) {

    const lat = latitude;
    const lng = longitude;

    const url = `https://maps.google.com/maps?q=${lat},${lng}`;
    //const url = `http://maps.apple.com/?ll=${lat},${lng}`;

    this.openMapUrl(url);
  }
}
