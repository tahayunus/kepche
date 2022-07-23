import { Component, Injector, OnInit } from '@angular/core';
import { MenuCategory } from 'src/app/services/menu-category';
import { Place } from 'src/app/services/place-service';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-place-menu',
  templateUrl: './place-menu.page.html',
  styleUrls: ['./place-menu.page.scss'],
})
export class PlaceMenuPage extends BasePage {
  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }

  public params: any = {};
  public place: Place;
  public pid: any;
  public menuCategories: MenuCategory[] = [];
  constructor(
    injector: Injector,
    public menuCategoryService: MenuCategory,
  ) {
    super(injector);
    this.loadData();
  }

  async loadData() {
    this.place = new Place;
    this.place.id = this.pid;
    this.place.fetch();
    this.params.place = this.place;

    this.menuCategories = await this.menuCategoryService.load(this.params);
    console.log(this.menuCategories);
  }


  onDismiss() {
    return this.modalCtrl.dismiss();
  }
}
