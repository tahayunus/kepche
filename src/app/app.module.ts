import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';

const icons = [faFacebookF, faTwitter, faWhatsapp];
library.add(...icons);

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { ImgFallbackModule } from 'ngx-img-fallback';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { WalkthroughPageModule } from './pages/walkthrough/walkthrough.module';

import 'hammerjs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { SignInPageModule } from './pages/sign-in/sign-in.module';
import { SignUpPageModule } from './pages/sign-up/sign-up.module';
import { PlaceMenuPageModule } from './pages/place-menu/place-menu.module';
import { CityModalPageModule } from './pages/city-modal/city-modal.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ImgFallbackModule,
    WalkthroughPageModule,
    SignInPageModule,
    SignUpPageModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Camera,
    Facebook,
    HeaderColor,
    InAppBrowser,
    Geolocation,
    BackgroundGeolocation,
    StatusBar,
    HTTP,
    SocialSharing,
    SplashScreen,
    SafariViewController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
