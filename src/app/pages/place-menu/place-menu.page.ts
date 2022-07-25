import { Component, Injector, OnInit } from '@angular/core';
import { Place } from 'src/app/services/place-service';
import { Product } from 'src/app/services/product';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-place-menu',
  templateUrl: './place-menu.page.html',
  styleUrls: ['./place-menu.page.scss'],
})
export class PlaceMenuPage extends BasePage implements OnInit {


  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }
  public products: Product[] = [];
  protected params: any = {};
  constructor(
    injector: Injector,
    private productService: Product
  ) {
    super(injector);
  }

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {

    const place = new Place();
    place.id = this.getParams().id;
    this.products = await this.productService.loadMenu(place);
    console.log('Ürünler', this.products);
  }

}
