import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordPageModule } from '../forgot-password/forgot-password.module';
import { SignUpPageModule } from '../sign-up/sign-up.module';
import { FollowersPage } from './followers';
 
@NgModule({
  declarations: [
    FollowersPage,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ForgotPasswordPageModule,
    SignUpPageModule,
  ],
  entryComponents: [FollowersPage]
})
export class FollowersPageModule {}
