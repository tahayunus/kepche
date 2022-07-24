
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { User } from '../../services/user-service';
import { BasePage } from '../base-page/base-page';
import { Review } from '../../services/review-service';
import { Place } from '../../services/place-service';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import { ChangePasswordPage } from '../change-password/change-password';
import { SignInPage } from '../sign-in/sign-in';
import { SettingsPage } from '../settings/settings';
import { Photo } from 'src/app/services/photo';
import { Observable, Subject } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { merge } from 'hammerjs';
import { CommentAddPage } from '../comment-add/comment-add';
import { FollowersPage } from '../followers/followers';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  styleUrls: ['profile.scss'],
})
export class ProfilePage extends BasePage implements OnInit {

  protected params: any = {};
  public user: User;
  public places: Place[] = [];
  public place: Place;
  public followers = [];
  public following = [];
  public followersLenght: number;
  public followingLenght: number;
  public photos: Photo[] = [];
  public totalPhotos: number;
  public likes = [];
  public isliked = [];

  public contentLoaded: Subject<any>;
  public loadAndScroll: Observable<any>;
  constructor(
    injector: Injector,
    private photoService: Photo,
    private userService: User,
    private placeService: Place
  ) {
    super(injector);

    this.params.limit = 20;
    this.params.page = 0;
    
  }

  enableMenuSwipe() {
    return true;
  }

  ngOnInit() {

    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
      this.getFollowers();
      this.getFollowing();
      this.loadPhotos();
      this.followers;
      this.following;
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    if (this.user) {
      this.getFollowers();
      this.getFollowing();
      this.loadPhotos();
      this.followers;
      this.following;
    } else {
      this.openSignInModal();
    }
    this.getPlace();
  }

  async ionViewDidEnter() {

    this.user = User.getCurrent();

    const title = await this.getTrans('PROFILE');
    this.setPageTitle(title);

    this.setMetaTags({
      title: title
    });
  }
  
  async getPlace() {
    this.places = await this.placeService.loadMyPlace(User.getCurrent().id);
    console.log('Benim Mekan', this.places[0]);
    this.place = this.places[0];
  }
  async getFollowers() {
    const fls = await this.user.followers;
    for (let fs of fls) {
      this.followers.push(fs);
    }
    console.log('Followers', this.followers);
  }
  async getFollowing() {
    const flw = await this.user.following;
    for (let fg of flw) {
      this.following.push(fg);
    }
    console.log('Following', this.following);
  }
  async openFollowers(id: string,type:number){

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: FollowersPage,
      componentProps: {
        pid: id,
        type: type,
        fls: this.followers,
        flw: this.following
      }
    });

    await modal.present();

    await this.dismissLoadingView();
  }
  goTo(page: string) {

    if (!User.getCurrent()) return this.openSignInModal();

    this.navigateToRelative('./' + page);
  }

  likeButton(id, likes, liked, index) {
    console.log("aynennn", likes);
    let newLikes = [];
    if (liked) {
      for (let like of likes) {
        if (like['userid'] != User.getCurrent().id) {
          newLikes.push(like);
        }
      }
      const query = new Photo();
      query.id = id;
      query.set("like", newLikes);
      query.save();
      this.isliked[index] = 0;
    } else {
      const query = new Photo();
      query.id = id;
      likes.push({ "userid": User.getCurrent().id })
      query.set("like", likes);
      this.isliked[index] = 1;
      query.save();
    }
  }

  onComment(photo) {
    if (User.getCurrent()) {
      this.openAddReviewModal(photo);
    } else {
      this.openSignInModal();
    }
  }

  async openAddReviewModal(photo) {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: CommentAddPage,
      componentProps: {
        photo: photo
      }
    });

    await modal.present();

    await this.dismissLoadingView();

  }

  async loadPhotos() {
    try {
      const photos = await this.photoService.load({
        user: this.user,
      });


      for (let photo of photos) {
        this.photos.push(photo);
        const likes = photo.like;
        let isLiked = 0;
        for (let likePhoto of likes) {
          if (likePhoto['userid'] === User.getCurrent().id) {
            isLiked = 1;
          }
          this.likes.push(likePhoto);
        }
        this.isliked.push(isLiked);
        console.log('likes', photos);
      }
      this.totalPhotos = photos.length
      if (this.photos.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

      this.onRefreshComplete(photos);

    } catch (err) {
      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      this.showContentView();
      this.onRefreshComplete();
    }
  }
  async onPresentEditModal() {

    if (!User.getCurrent()) return this.openSignInModal();

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: ProfileEditPage
    });

    await modal.present();

    await this.dismissLoadingView();
  }

  async onPresentChangePasswordModal() {

    if (!User.getCurrent()) return this.openSignInModal();

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: ChangePasswordPage
    });

    await modal.present();

    await this.dismissLoadingView();
  }

  async onPresentSettingsModal() {

    if (!User.getCurrent()) return this.openSignInModal();

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();

    await this.dismissLoadingView();
  }

  async openSignInModal() {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: SignInPage,
      cssClass: 'loginModal'
    });

    await modal.present();

    await this.dismissLoadingView();
  }

  onLogout() {
    this.events.publish('user:logout')
  }

}
