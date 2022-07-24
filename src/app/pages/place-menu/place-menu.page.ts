import { Component, Injector, Input, OnInit } from '@angular/core';
import { MenuCategory } from 'src/app/services/menu-category';
import { Place } from 'src/app/services/place-service';
import { Product } from 'src/app/services/product';
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
  
  @Input() pid: string;
  public products: Product[] = [];
  public params: any = {};
  public place: Place;
  public menuCategories: MenuCategory[] = [];
  constructor(
    injector: Injector,
    public menuCategoryService: MenuCategory,
    private productService: Product
  ) {
    super(injector);
    this.loadData();
    
    console.log('placeid', this.pid);
  }

  async loadData() {
    this.place = new Place;
    this.place.id = this.pid;
    this.place.fetch();
    this.params.place = this.place;

    this.products = await this.productService.load(this.params);
    console.log(this.products);
  }


  onDismiss() {
    return this.modalCtrl.dismiss();
  }
}
