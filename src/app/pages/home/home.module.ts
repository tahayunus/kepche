import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home';
import { SharedModule } from '../../shared.module';
import { SignInPageModule } from '../sign-in/sign-in.module';
import { SignUpPageModule } from '../sign-up/sign-up.module';
import { StoryDetailPageModule } from '../story-detail/story-detail.module';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,    
    SignInPageModule,
    SignUpPageModule,
    StoryDetailPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers:[
    BackgroundMode
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
