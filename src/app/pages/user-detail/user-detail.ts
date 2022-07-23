
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
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
  styleUrls: ['user-detail.scss']
})
export class UserDetailPage extends BasePage {

  protected params: any = {};
  public user: User;
  public profile: User;
  public isFollowYou:boolean ;
  public uFollow: boolean;
  public followers = [];
  public following = [];
  public myFollowers = [];
  public myFollowing = [];
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
    private userService: User
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
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    if (this.user) {
      this.loadProfile();
      this.loadPhotos();
      this.followers;
      this.following;
    }
  }
  async loadProfile() {
    const profile = await this.userService.loadOne(this.getParams().id);
    for(let p of profile){
      this.profile = p;
    }
    console.log("kasd",profile);
    const fls = this.profile.followers;
    this.uFollow = false;
    for (let fs of fls) {
      if(fs.followId  === this.user.id){
        this.uFollow = true;
      }
      this.followers.push(fs);
    }
    console.log('Followers', this.followers);
    const flw = this.profile.following;
    this.isFollowYou = false;
    for (let fg of flw) {
      if(fg.followId  === this.user.id){
        this.isFollowYou = true;
      }
      this.following.push(fg);
    }
    console.log('Following', this.following);
  }

  unfollow() {
    const query = new User();
    query.id = User.getCurrent().id;
    console.log("profile",this.profile)
    let list = User.getCurrent().following;
    list.forEach((e,i) => {
      if(e.followId === this.profile.id){
        delete list[i];
        list.length = list.length-1;
      }
    });
    query.set('following', list);
    query.save();

    const que = new User();
    que.id = this.profile.id;
    console.log("profile",this.profile)
    let lis = this.profile.followers;
    lis.forEach((e,i) => {
      if(e.followId === this.user.id){
        delete lis[i];
        lis.length = lis.length-1;
      }
    });
    que.set('followers', lis);
    que.save(null,{useMasterKey:true});
    console.log("aaaayay",this.profile.followers);

    this.uFollow = false;
  }

  follow() {
    const query = new User();
    query.id = User.getCurrent().id;
    console.log("profile",this.profile)
    let list = this.user.following;
    console.log("listtt",list)
    list.push({
      "followId": this.profile.id,
      "request": 0,
      "time":Date.now()
    })
    console.log("listtt",list)
    query.set('following', list);
    query.save();


    const que = new User();
    que.id = this.profile.id;
    
    let lis =[];
    this.profile.followers.forEach(element => {
      lis.push(element);
    });
    lis.push({
      "followId": this.user.id,
      "request": 0,
      "time":Date.now()
    })
    que.set('followers', lis);
    que.save(null,{useMasterKey:true});
    console.log("aaaayay",this.profile.followers);

    this.uFollow = true;
  }

  async ionViewDidEnter() {

    this.user = User.getCurrent();

    const title = await this.getTrans('PROFILE');
    this.setPageTitle(title);

    this.setMetaTags({
      title: title
    });
  }
  async getMyFollowers() {
    const fls = await this.user.followers;
    for (let fs of fls) {
      this.myFollowers.push(fs);
    }
    console.log('Followers', this.followers);
  }
  async getMyFollowing() {
    const flw = await this.user.following;
    for (let fg of flw) {
      this.myFollowing.push(fg);
    }
    console.log('Following', this.following);
  }
  async openFollowers(id: string, type: number) {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: FollowersPage,
      componentProps: {
        pid: id,
        fls: this.followers,
        flw: this.following,
        myFls : this.myFollowers,
        myFlw: this.myFollowing,
        type: type
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
        user: this.getParams().id,
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
        console.log('likes', this.isliked);
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
      component: SignInPage
    });

    await modal.present();

    await this.dismissLoadingView();
  }

  onLogout() {
    this.events.publish('user:logout')
  }

}
