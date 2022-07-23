import { NgModule } from '@angular/core';
import { CheckinPage } from './checkin';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    CheckinPage,
  ],
  imports: [
    SharedModule,
    MentionModule,
    RouterModule,
    FormsModule,
  ],
  entryComponents: [
    CheckinPage
  ]
})
export class CheckinPageModule {}
