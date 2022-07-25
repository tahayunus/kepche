import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaceMenuPage } from './place-menu.page';
import { SharedModule } from 'src/app/shared.module';

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
    RouterModule.forChild(routes)
  ],
  declarations: [PlaceMenuPage]
})
export class PlaceMenuPageModule {}
