import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Place } from 'src/app/services/place-service';
import { Product } from 'src/app/services/product';
import { User } from 'src/app/services/user-service';
import { BasePage } from '../base-page/base-page';

import Swal from 'sweetalert2';
import { PlaceMenuModalPage } from '../place-menu-modal/place-menu-modal.page';
@Component({
  selector: 'app-place-menu',
  templateUrl: './place-menu.page.html',
  styleUrls: ['./place-menu.page.scss'],
})
export class PlaceMenuPage extends BasePage implements OnInit {


  public toggle = false;
  public disableAutomaticDebit: Boolean;
  public user: User
  public products: Product[] = [];
  public place: Place;
  protected params: any = {};
  constructor(
    injector: Injector,
    private productService: Product,
    private placeService: Place
  ) {
    super(injector);
  }

  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    console.log('User', this.user)
    this.getProducts();
    this.getPlace();
  }
  async getPlace() {
    this.place = await this.placeService.loadOne(this.getParams().id);
    console.log('mekan', this.place)
  }
  async getProducts() {
    const place = new Place();
    place.id = this.getParams().id;
    this.products = await this.productService.loadMenu(place);
    console.log('Ürünler', this.products);
  }

  async openModal(id: string) {
    await this.showLoadingView({ showOverlay: true });
    const modal = await this.modalCtrl.create({
      component: PlaceMenuModalPage,
      componentProps: { id: id },
      cssClass: 'menuModal'
    });
    await modal.present();
    await this.dismissLoadingView();
  }
  async changeStatus(event: boolean, id: string) {
    console.log(event);
    const product = new Product();
    product.id = id;
    if (event === true) {
      product.set('isActive', false);
      product.save();
      const trans = await this.getTrans(['GOOD_JOB', 'PRODUCT_IS_DEACTIVE', 'OK']);

      await Swal.fire({
        title: trans.GOOD_JOB,
        text: trans.PRODUCT_IS_DEACTIVE,
        confirmButtonText: trans.OK,
        type: 'success',
        animation: false,
        heightAuto: false,
        customClass: {
          popup: 'fade-in'
        },
      });
    } else if (event === false) {
      this.openModal(id);
    }
  }
}