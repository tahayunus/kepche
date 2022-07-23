import { Component, Injector, OnInit } from '@angular/core';
import { Address } from 'src/app/services/address';
import { LocalStorage } from 'src/app/services/local-storage';
import { User } from 'src/app/services/user-service';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage extends BasePage {
  enableMenuSwipe(): boolean {
    throw new Error('Method not implemented.');
  }
  public user: User;
  public address: Address[] = [];
  public selectedAdress: any = '';
  constructor(
    injector: Injector,
    private addressService: Address,
    private storage: LocalStorage
  ) {
    super(injector);
  }

  ngOnInit() {

    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    this.getAddress();
    this.selectedAdress = this.storage.getAddress();
    console.log('Seçili Adres', this.selectedAdress);
  }
  async getAddress() {
    this.address = await this.addressService.load({
      user: this.user
    })
    console.log('adresler', this.address)
  }
  selectAddress(event: CustomEvent){
    
    if (!event) return;
    const address = event.detail.value;

    this.storage.setAddress(address);
    console.log('Address', this.storage.getAddress());
    this.preference.address = address;
  }
}
