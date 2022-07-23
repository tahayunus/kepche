import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InfoWindowComponent } from './info-window/info-window';
import { TranslateModule } from '@ngx-translate/core';
import { UploadBoxComponent } from './upload-box/upload-box.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RatingModule } from 'ng-starrating';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
	declarations: [
		InfoWindowComponent,
		UploadBoxComponent,
		PlaceCardComponent,
		ProductCardComponent,
		HeaderComponent
	],
	entryComponents: [
		InfoWindowComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		RouterModule,
		TranslateModule,
		LazyLoadImageModule,
		RatingModule,
	],
	exports: [
		InfoWindowComponent,
		UploadBoxComponent,
		PlaceCardComponent,
		ProductCardComponent,
		HeaderComponent
	]
})
export class ComponentsModule {}
