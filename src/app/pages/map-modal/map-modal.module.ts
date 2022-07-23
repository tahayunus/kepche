import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MapMapboxPageModule } from '../map-mapbox/map-mapbox.module';
import { MapModalPage } from './map-modal';
 
@NgModule({
  declarations: [
    MapModalPage,
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [MapModalPage]
})
export class MapModalPageModule {}
