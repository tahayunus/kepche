import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlaceListPage } from './place-list';
import { SharedModule } from '../../shared.module'; 
import { SignInPageModule } from '../sign-in/sign-in.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    PlaceListPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    SignInPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlaceListPage
      }
    ])
  ]
})
export class PlaceListPageModule {}
