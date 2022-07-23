import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/services/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() scrollObservable: Observable<any>;
  @Input() extraParams: any = {};
  @Input() color = 'white';
  @Input() showStatus: boolean;

  constructor() { }

  ngOnInit() {}

  getStatusColor(status: string) {
    if (status === 'Pending') {
      return 'warning';
    } else if (status === 'Approved') {
      return 'success';
    } else if (status === 'Rejected') {
      return 'danger';
    } else  {
      console.log('no match found');
    }
  }

}
