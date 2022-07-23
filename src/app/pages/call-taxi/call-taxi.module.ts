import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module'; 
import { SignInPageModule } from '../sign-in/sign-in.module';
import { CallTaxiPage } from './call-taxi.page';
@NgModule({
  declarations: [
    CallTaxiPage,
  ],
  imports: [
    SharedModule,
    SignInPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: CallTaxiPage
      }
    ])
  ]
})
export class CallTaxiPageModule {}
