import { Component } from '@angular/core';
import { Platform, Events, AlertController, ToastController, LoadingController, ModalController, Config } from '@ionic/angular';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import * as Parse from 'parse';
import { LocalStorage } from './services/local-storage';
import { User } from './services/user-service';
import { Installation } from './services/installation';
import { WindowRef } from './services/window-ref';
import { Router, NavigationEnd } from '@angular/router';
import { Preference } from './services/preference';
import { Category } from './services/categories';
import { SubCategory } from './services/subcategories';
import { Slide } from './services/slide';
import { Place } from './services/place-service';
import { Review } from './services/review-service';
import { Post } from './services/post';
import { WalkthroughPage } from './pages/walkthrough/walkthrough';
import OneSignal from 'onesignal-cordova-plugin';
import { SignInPage } from './pages/sign-in/sign-in';
import { SignUpPage } from './pages/sign-up/sign-up';
import { StatikPage } from './services/statik-page';
import { Setting } from './services/setting';
import { CityModalPage } from './pages/city-modal/city-modal.page';

// Call this function when your app starts
function OneSignalInit(): void {
  // Uncomment to set OneSignal device logging to VERBOSE  
  // OneSignal.setLogLevel(6, 0);

  // NOTE: Update the setAppId value below with your OneSignal AppId.
  OneSignal.setAppId("235b471a-95af-4c74-aee3-be05bb96348b");
  OneSignal.setNotificationOpenedHandler(function (jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });

  // iOS - Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
    console.log("User accepted notifications: " + accepted);
  });
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    {
      title: 'PHARMACY_ON_DUTY',
      url: 'pharmacy-duty',
      icon: 'medkit'
    },
    {
      title: 'CALL_TAXI',
      url: 'call-taxi',
      icon: 'car'
    },
    {
      title: 'EMERGENCY',
      url: 'emergency',
      icon: 'warning'
    }
  ];
  myDate = new Date();
  public imageServer: string;
  public setting: Setting;
  public pages: StatikPage[] = [];
  private user: User;
  private objWindow: any;
  private loader: any;
  private currentUrl: string;
  private place: Place[] = [];
  constructor(private platform: Platform,
    private router: Router,
    private storage: LocalStorage,
    private preference: Preference,
    private events: Events,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private userService: User,
    private windowRef: WindowRef,
    private installationService: Installation,
    private headerColor: HeaderColor,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private pageService: StatikPage,
    private settingService: Setting,
    private placeService: Place
  ) {

    this.initializeApp();
    this.imageServer = environment.imageServer;
  }

  async initializeApp() {
    if (this.platform.is('desktop')) {
      const config = new Config;
      config.set('rippleEffect', false);
      config.set('animated', false);
    }

    this.subscribeToRouterChanges();

    this.objWindow = this.windowRef.nativeWindow;

    this.setupParse();
    this.setupDefaults();
    this.setupEvents();
this.getPlace();
    if (this.platform.is('cordova')) {
      await this.platform.ready();
      OneSignalInit();
      this.setupPush();
      this.setupAndroidHeaderColor();
      this.setupStatusBar();
      this.splashScreen.hide();
    }

  }
  async getPlace() {
    this.place = await this.placeService.loadMyPlace(User.getCurrent().id);
    console.log('Benim Mekan', this.place[0]);
  }
  async setupDefaults() {
    this.translate.setDefaultLang(environment.defaultLang);
    try {
      let lang = await this.storage.getLang() || environment.defaultLang;
      if (lang === 'ar') {
        document.dir = 'rtl';
      } else {
        document.dir = 'ltr';
      }
      await this.storage.setLang(lang);
      this.translate.use(lang);
      this.preference.lang = lang;
    } catch (error) {
      console.log(error);
    }

    try {
      const unit = await this.storage.getUnit() || environment.defaultUnit;
      await this.storage.setUnit(unit);
      this.preference.unit = unit;
    } catch (error) {
      console.log(error);
    }

    try {
      const address = await this.storage.getAddress();
      await this.storage.setAddress(address);
      this.preference.address = address;
    } catch (error) {
      console.log(error);
    }

  }

  subscribeToRouterChanges() {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {

        if (this.router.url === '/index/home' && !this.currentUrl) {
          try {
            const skipIntro = await this.storage.getSkipIntroPage();
            if (!skipIntro) {
              this.presentWalkthroughModal();
            }
          } catch (error) {
            console.log(error);
          }
        }
        this.currentUrl = this.router.url;
      }
    })
  }

  setupEvents() {

    this.user = User.getCurrent();
    this.events.subscribe('user:login', (user) => {
      this.user = user;
      this.loadCurrentUser();
      this.updateInstallation();
    });

    if (this.user.city === 'other') {
      this.openCitiesModal();
      console.log('Şehir seçili değil');
    }

    this.events.subscribe('user:logout', () => {
      this.onLogOut();
    });
    this.loadStatikPage();
    this.myDate;
  }

  loadCurrentUser() {
    this.user = User.getCurrent();
    if (this.user) this.user.fetch();
  }

  goTo(page: string) {
    this.router.navigate([page]);
  }

  setupParse() {
    Slide.getInstance();
    Post.getInstance();
    Review.getInstance();
    Place.getInstance();
    Category.getInstance();
    SubCategory.getInstance();
    User.getInstance();

    Parse.initialize(environment.appId, environment.javascriptKey, environment.masterKey);
    (Parse as any).serverURL = environment.serverUrl;
    (Parse as any).masterKey = environment.masterKey;

    if (!this.platform.is('hybrid')) {
      // Load the Facebook API asynchronous when the window starts loading

      this.objWindow.fbAsyncInit = function () {
        Parse.FacebookUtils.init({
          appId: environment.fbId,
          cookie: true,
          xfbml: true,
          version: 'v1.0'
        });
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }

    this.loadCurrentUser();
  }

  setupStatusBar() {
    if (this.platform.is('ios')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
    } else {
      this.statusBar.backgroundColorByHexString(environment.androidHeaderColor);
    }
  }

  setupAndroidHeaderColor() {
    if (environment.androidHeaderColor && this.platform.is('android')) {
      this.headerColor.tint(environment.androidHeaderColor);
    }
  }

  setupPush() {

    this.objWindow = this.windowRef.nativeWindow;

    if (this.objWindow.ParsePushPlugin) {

      this.objWindow.ParsePushPlugin.resetBadge();

      this.platform.resume.subscribe(() => {
        this.objWindow.ParsePushPlugin.resetBadge();
      });

      this.objWindow.ParsePushPlugin.on('receivePN', (pn) => {
        console.log('[receivePn] Push notification:' + JSON.stringify(pn));
        this.showNotification(pn);
        this.objWindow.ParsePushPlugin.resetBadge();
      });

      this.objWindow.ParsePushPlugin.on('openPN', (pn) => {
        console.log('Notification:' + JSON.stringify(pn));
        this.objWindow.ParsePushPlugin.resetBadge();
      });

      this.updateInstallation();
    }
  }

  async updateInstallation() {

    try {

      if (this.objWindow.ParsePushPlugin) {

        const user = this.user ? this.user.toPointer() : null;

        const id = await this.installationService.getId();

        const res = await this.installationService.save(id, { user: user })
        console.log('Installation updated', res);
      }

    } catch (error) {
      console.log(error);
    }

  }
  async loadStatikPage() {
    const lang = await this.storage.getLang();
    const pages = await this.pageService.load(lang);
    for (let item of pages) {
      this.pages.push(item);
    }
  }
  async presentWalkthroughModal() {

    await this.showLoadingView();

    const modal = await this.modalCtrl.create({
      component: WalkthroughPage
    });

    await modal.present();

    this.dismissLoadingView();
  }
  async openCitiesModal() {

    await this.showLoadingView();

    const modal = await this.modalCtrl.create({
      component: CityModalPage
    });

    await modal.present();

    this.dismissLoadingView();
  }

  async showNotification(notification: any) {
    const trans = await this.translate.get(['NOTIFICATION', 'OK']).toPromise();
    this.showAlert(trans.NOTIFICATION, notification.alert, trans.OK);
  }

  async showAlert(title: string = '', message: string = '', okText: string = 'OK') {
    let alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: [okText],
    });
    return await alert.present();
  }

  async showToast(message: string = '') {

    let alert = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    return await alert.present();
  }

  async showLoadingView() {

    const loadingText = await this.translate.get('LOADING').toPromise();

    this.loader = await this.loadingCtrl.create({
      message: loadingText
    });

    return await this.loader.present();
  }

  async dismissLoadingView() {

    if (!this.loader) return;

    try {
      await this.loader.dismiss()
    } catch (error) {
      console.log('ERROR: LoadingController dismiss', error);
    }
  }

  async openSignUpModal() {
    const modal = await this.modalCtrl.create({
      component: SignUpPage
    });

    await modal.present();

    await this.dismissLoadingView();
  }

  async openSignInModal() {

    const modal = await this.modalCtrl.create({
      component: SignInPage
    });

    await modal.present();

    await this.dismissLoadingView();
  }
  async onLogOut() {

    try {
      await this.showLoadingView();
      await this.userService.logout();
      this.events.publish('user:loggedOut');
      this.user = null;
      this.goTo('/');
      this.translate.get('LOGGED_OUT').subscribe(str => this.showToast(str));
      this.dismissLoadingView();
      this.updateInstallation();
    } catch (err) {
      console.log(err.message);
      this.dismissLoadingView();
    }

  }

}
