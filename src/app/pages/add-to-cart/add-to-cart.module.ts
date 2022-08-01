import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { AddToCart } from './add-to-cart.page';


@NgModule({
  declarations: [
    AddToCart,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AddToCart]
})
export class AddToCartModule {}
