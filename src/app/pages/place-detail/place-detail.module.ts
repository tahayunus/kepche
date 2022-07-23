import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlaceDetailPage } from './place-detail';
import { SharedModule } from '../../shared.module';
import { ReviewAddPageModule } from '../review-add/review-add.module';
import { SignInPageModule } from '../sign-in/sign-in.module';
import { SharePageModule } from '../share/share.module';
import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';
import { GallerizeModule } from  '@ngx-gallery/gallerize';
import { PlaceUserEditPageModule } from '../place-user-edit/place-user-edit.module';
import { CheckinPageModule } from '../checkin/checkin.module';
import { PlaceMenuPageModule } from '../place-menu/place-menu.module';
 
@NgModule({
  declarations: [
    PlaceDetailPage,
  ],
  imports: [
    SharedModule,
    ReviewAddPageModule,
    SignInPageModule,
    PlaceUserEditPageModule,
    SharePageModule,
    CheckinPageModule,
    PlaceMenuPageModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlaceDetailPage
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlaceDetailPageModule {}
