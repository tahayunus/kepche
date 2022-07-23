import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { PropertiesPage } from './properties';

@NgModule({
  declarations: [
    PropertiesPage,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PropertiesPage
      }
    ])
  ]
})
export class PropertiesPageModule {}
