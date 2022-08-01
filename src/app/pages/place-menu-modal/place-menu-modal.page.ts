import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/services/product';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-place-menu-modal',
  templateUrl: './place-menu-modal.page.html',
  styleUrls: ['./place-menu-modal.page.scss'],
})
export class PlaceMenuModalPage extends BasePage implements OnInit {
  id: any;
  product: Product;
  price: number;
  quantity: number;
  constructor(
    injector: Injector,
    private productService: Product
  ) {
    super(injector);
  }

  ngOnInit() {
    this.getProduct();
  }

  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }
  async getProduct() {
    this.product = await this.productService.loadOne(this.id);
    this.price = this.product.price;
    this.quantity = this.product.quantity;
    console.log('id', this.product);
  }
  onDismiss() {
    return this.modalCtrl.dismiss();
  }

  changeQuantity(event: string){
    if(event === 'plus' && this.quantity < 10){
      this.quantity = this.quantity + 1;
    } else if(event === 'minus' && this.quantity > 0){
      this.quantity = this.quantity - 1;
    }
  }
  async onSubmit() {


  }
}
