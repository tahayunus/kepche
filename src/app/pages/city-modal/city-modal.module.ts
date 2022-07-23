import { NgModule } from '@angular/core';
import { CityModalPage } from './city-modal.page';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  imports: [SharedModule],
  entryComponents: [CityModalPage],
  declarations: [CityModalPage]
})
export class CityModalPageModule { }
