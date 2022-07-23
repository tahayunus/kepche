import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PharmacyDutyPage } from './pharmacy-duty';
import { SharedModule } from '../../shared.module'; 
import { SignInPageModule } from '../sign-in/sign-in.module';
@NgModule({
  declarations: [
    PharmacyDutyPage,
  ],
  imports: [
    SharedModule,
    SignInPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: PharmacyDutyPage
      }
    ])
  ]
})
export class PharmacyDutyPageModule {}
