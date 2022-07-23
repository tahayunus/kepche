import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapMapboxPage } from './map-mapbox.page';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { SharedModule } from 'src/app/shared.module';
import { MapModalPageModule } from '../map-modal/map-modal.module';

const routes: Routes = [
  {
    path: '',
    component: MapMapboxPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    IonBottomDrawerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MapModalPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapMapboxPage]
})
export class MapMapboxPageModule {}
