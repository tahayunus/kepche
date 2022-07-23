import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceUserEditPage } from './place-user-edit';
 
@NgModule({
  declarations: [
    PlaceUserEditPage,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    PlaceUserEditPage
  ]
})
export class PlaceUserEditPageModule {}
