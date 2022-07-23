import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage extends BasePage {
  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
