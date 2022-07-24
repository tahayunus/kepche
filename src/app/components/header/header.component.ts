import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { SignInPage } from 'src/app/pages/sign-in/sign-in';
import { SignUpPage } from 'src/app/pages/sign-up/sign-up';
import { Address } from 'src/app/services/address';
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
  public settings: Setting[] = [];
  public selectedAddress: Address;
  constructor(
    injector: Injector,
    private settingService: Setting,
    private addressService: Address,
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
    this.getSelectAddress();
  }
  async getSelectAddress() {
    this.selectedAddress = await this.addressService.loadOne(this.user.address);
  }
  async openSignInModal() {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: SignInPage
    });

    await modal.present();

    await this.dismissLoadingView();
  }


}
