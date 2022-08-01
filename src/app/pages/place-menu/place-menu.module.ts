import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaceMenuPage } from './place-menu.page';
import { SharedModule } from 'src/app/shared.module';
import { PlaceMenuModalPageModule } from '../place-menu-modal/place-menu-modal.module';

const routes: Routes = [
  {
    path: '',
    component: PlaceMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PlaceMenuModalPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaceMenuPage]
})
export class PlaceMenuPageModule {}
