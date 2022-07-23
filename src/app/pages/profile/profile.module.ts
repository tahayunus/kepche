import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePage } from './profile';
import { SharedModule } from '../../shared.module';
import { ProfileEditPageModule } from '../profile-edit/profile-edit.module';
import { ChangePasswordPageModule } from '../change-password/change-password.module';
import { SignInPageModule } from '../sign-in/sign-in.module';
import { SettingsPageModule } from '../settings/settings.module';
import { CommentAddPageModule } from '../comment-add/comment-add.module';
import { FollowersPageModule } from '../followers/followers.module';
 
@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    SharedModule,
    CommentAddPageModule,
    ProfileEditPageModule,
    ChangePasswordPageModule,
    SignInPageModule,
    SettingsPageModule,
    FollowersPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage
      }
    ])
  ]
})
export class ProfilePageModule {}
