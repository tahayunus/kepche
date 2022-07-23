import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { SignInPage } from 'src/app/pages/sign-in/sign-in';
import { SignUpPage } from 'src/app/pages/sign-up/sign-up';
import { LocalStorage } from 'src/app/services/local-storage';
import { Setting } from 'src/app/services/setting';
import { User } from 'src/app/services/user-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BasePage {
  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }
  public user: User;
  id: string = '9UfyYOlDNC';
  public selectedAddress: any;
  public settings: Setting[] = [];
  constructor(
    injector: Injector,
    private settingService: Setting,
    private storage: LocalStorage
  ) {
    super(injector);
  }

  ngOnInit() {
    this.user = User.getCurrent();
    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });
    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    this.selectedAddress = this.storage.getAddress();
    console.log('seçili adres', this.selectedAddress)
  }

  async openSignInModal() {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: SignInPage
    });

    await modal.present();

    await this.dismissLoadingView();
  }

  async registerTeacher() {

    const modal = await this.modalCtrl.create({
      component: SignUpPage,
      componentProps: { selectedType: 'teacher' },
      cssClass: 'signupModal'
    });

    await modal.present();

    await this.dismissLoadingView();
  }
  async onPresentSignUpModal() {

    const modal = await this.modalCtrl.create({
      component: SignUpPage,
      cssClass: 'signupModal'
    });

    await modal.present();

    await this.dismissLoadingView();
  }
}
