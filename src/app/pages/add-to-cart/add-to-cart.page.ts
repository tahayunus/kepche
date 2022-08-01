import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/services/product';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.page.html',
  styleUrls: ['./add-to-cart.page.scss'],
})
export class AddToCart extends BasePage implements OnInit {
  public form: FormGroup;
  id: any;
  public product: Product;
  price: number;
  quantity: number;
  constructor(
    injector: Injector,
    private productService: Product
  ) {
    super(injector);
    this.form = new FormGroup({
      price: new FormControl('', Validators.required)
    });
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
    console.log('price', this.form.value.price);
    console.log('quantity', this.quantity);
    const data = new Product();
    data.id = this.id;
    data.set('price', this.form.value.price);
    data.set('quantity', this.quantity);
    data.set('isActive', true);
    data.save();
    this.onDismiss();
  }
}
