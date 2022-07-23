
import { Component, Injector, OnInit } from '@angular/core';
import { User } from 'src/app/services/user-service';
import { LocalStorage } from '../../services/local-storage';
import { BasePage } from '../base-page/base-page';
import { WalkthroughPage } from '../walkthrough/walkthrough';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  styleUrls: ['settings.scss']
})
export class SettingsPage extends BasePage implements OnInit{

  public user: User;
  phoneNot: boolean;
  smsNot: boolean;
  emailNot: boolean;
  changePhone: boolean;
  changeSms: boolean;
  changeEmail: boolean;
  constructor(injector: Injector,
    private storage: LocalStorage) {

    super(injector);
  }

  async ngOnInit() {

    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });

    this.smsNot = this.user.smsNot;
    this.emailNot = this.user.emailNot;
    this.phoneNot = this.user.phoneNot;
    console.log('1 2 3', this.smsNot, this.emailNot, this.phoneNot);
    this.changePhone;
    this.changeSms;
    this.changeEmail;
  }
  enableMenuSwipe() {
    return true;
  }
  saveSetting(sms:any, email:any, phone:any) {
  }
  goPhoneNot(event: boolean) {
    if (event === true) {
      this.changePhone = true;
    }
    if (event === false) {
      this.changePhone = false;
    }
    const data = new User();
    data.id = this.user.id;
    data.set('phoneNot', this.changePhone);
    data.save();
    console.log('sonuc1', this.changePhone)
  }
  goSmsNot(event: boolean) {
    if (event === true) {
      this.changeSms = true;
    }
    if (event === false) {
      this.changeSms = false;
    }
    const data = new User();
    data.id = this.user.id;
    data.set('smsNot', this.changeSms);
    data.save();
    console.log('sonuc2', this.changeSms)
  }
  goEmailNot(event: boolean) {
    if (event === true) {
      this.changeEmail = true;
    }
    if (event === false) {
      this.changeEmail = false;
    }
    const data = new User();
    data.id = this.user.id;
    data.set('emailNot', this.changeEmail);
    data.save();
    console.log('sonuc1', this.changeEmail)
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  onChangeUnit(event: CustomEvent) {

    if (!event) return;

    const unit = event.detail.value;

    this.storage.setUnit(unit);
    this.preference.unit = unit;
  }

  onChangeLang(event: CustomEvent) {

    if (!event) return;

    const lang = event.detail.value;

    if (lang === 'ar') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }

    this.storage.setLang(lang);
    console.log('Dil', this.storage.getLang());
    this.translate.use(lang);
    this.preference.lang = lang;
  }

  async presentWalkthroughModal() {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: WalkthroughPage
    });

    await modal.present();

    this.dismissLoadingView();

  }

}
