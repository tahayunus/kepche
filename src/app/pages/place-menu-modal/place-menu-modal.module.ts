import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlaceMenuModalPage } from './place-menu-modal.page';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    PlaceMenuModalPage,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [PlaceMenuModalPage]
})
export class PlaceMenuModalPageModule {}
