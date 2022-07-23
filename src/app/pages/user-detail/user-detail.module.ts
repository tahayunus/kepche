import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { ReviewAddPageModule } from '../review-add/review-add.module';
import { SignInPageModule } from '../sign-in/sign-in.module';
import { SharePageModule } from '../share/share.module';
import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';
import { GallerizeModule } from  '@ngx-gallery/gallerize';
import { PlaceUserEditPageModule } from '../place-user-edit/place-user-edit.module';
import { UserDetailPage } from './user-detail';
import { FollowersPageModule } from '../followers/followers.module';
 
@NgModule({
  declarations: [
    UserDetailPage,
  ],
  imports: [
    SharedModule,
    ReviewAddPageModule,
    SignInPageModule,
    PlaceUserEditPageModule,
    SharePageModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    FollowersPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserDetailPage
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserDetailPageModule {}
