
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../services/user-service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-followers',
  templateUrl: 'followers.html',
  styleUrls: ['followers.scss']
})
export class FollowersPage extends BasePage {
  public pid: any;
  public fls = [];
  public flw = [];
  public myFls = [];
  public myFlw = [];
  public type: number;
  public followers = [];
  public following = [];
  public myFollowers = [];
  public myFollowing = [];
  public user: any;
  public form: FormGroup;
  public isLoadingByUsername: boolean = false;
  public isLoadingByFacebook: boolean = false;

  constructor(injector: Injector,
    private userService: User,
    private fb: Facebook) {
    super(injector);
  }

  ngOnInit() {
    this.user = User.getCurrent();
    console.log('userid', this.pid);
    console.log('followers', this.fls);
    console.log('following', this.flw);
    console.log('myfollowers', this.myFls);
    console.log('myfollowing', this.myFlw);
    this.getFollowers();
    this.getFollowing();
    this.getMyFollowers();
    this.getMyFollowing();
  }
  changeType(event: number) {
    this.type = event;
  }
  async getFollowers() {
    try {
      let usrList = []
      this.fls.forEach(f => {
        usrList.push(f.followId);
      });
      const usr = await this.userService.loadList(usrList);
      for (let u of usr) {
        this.followers.push(u);
      }
      console.log("followsssers", usrList)
      this.showContentView();

    } catch (err) {
      this.showContentView();
      this.onRefreshComplete();
      let message = await this.getTrans('ERROR_NETWORK');
      this.showToast(message);
    }
  }
  async getFollowing() {
    try {
      let usrList = []
      this.flw.forEach(f => {
        usrList.push(f.followId);
      });
      const usr = await this.userService.loadList(usrList);
      for (let u of usr) {
        this.following.push(u);
      }
      console.log("followingsss", usrList)
      this.showContentView();

    } catch (err) {
      this.showContentView();
      this.onRefreshComplete();
      let message = await this.getTrans('ERROR_NETWORK');
      this.showToast(message);
    }
  }
  async getMyFollowers() {
    try {
      let usrList = []
      this.myFls.forEach(f => {
        usrList.push(f.followId);
      });
      const usr = await this.userService.loadList(usrList);
      for (let u of usr) {
        this.myFollowers.push(u);
      }
      console.log("myfollowsssers", usrList)
      this.showContentView();

    } catch (err) {
      this.showContentView();
      this.onRefreshComplete();
      let message = await this.getTrans('ERROR_NETWORK');
      this.showToast(message);
    }
  }
  async getMyFollowing() {
    try {
      let usrList = []
      this.flw.forEach(f => {
        usrList.push(f.followId);
      });
      const usr = await this.userService.loadList(usrList);
      for (let u of usr) {
        this.following.push(u);
      }
      console.log("followingsss", usrList)
      this.showContentView();

    } catch (err) {
      this.showContentView();
      this.onRefreshComplete();
      let message = await this.getTrans('ERROR_NETWORK');
      this.showToast(message);
    }
  }

  unfollow(i) {
    const query = new User();
    query.id = User.getCurrent().id;
    delete this.fls[i];
    this.fls.length = this.fls.length - 1;
    query.set('followers', this.fls);
    query.save();
  }

  enableMenuSwipe(): boolean {
    return false;
  }

  onDismiss() {
    return this.modalCtrl.dismiss();
  }

}
