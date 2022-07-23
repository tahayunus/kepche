import { Component, Injector, OnInit } from '@angular/core';
import { City } from 'src/app/services/city';
import { LocalStorage } from 'src/app/services/local-storage';
import { User } from 'src/app/services/user-service';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.page.html',
  styleUrls: ['./city-modal.page.scss'],
})
export class CityModalPage extends BasePage implements OnInit {
  public user: User;
  public cities: City[] = [];
  constructor(injector: Injector,
    private storage: LocalStorage,
    private citiesService: City
  ) {
    super(injector);
  }
  ngOnInit(): void {
    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    this.getCities();
  }
  enableMenuSwipe(): boolean {
    return false;
  }
  async getCities() {
    this.cities = await this.citiesService.load();
  }
  
  onDismiss() {
    this.modalCtrl.dismiss();
  }
  onChangeUnit(event: string) {
    const data = new User();
    data.id = this.user.id;
    data.set('city', event);
    data.save();
    this.onDismiss();    
  }

}
