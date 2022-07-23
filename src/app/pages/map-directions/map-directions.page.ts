import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-map-directions',
  templateUrl: './map-directions.page.html',
  styleUrls: ['./map-directions.page.scss'],
})
export class MapDirectionsPage extends BasePage {
  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }

  constructor(
    private injector: Injector
    ) {
    super(injector);
   }

  ngOnInit() {
  }

}
