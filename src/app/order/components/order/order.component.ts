import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  product$: Observable<Product[]>;


  constructor( private cartService: CartService) {
    // this.product$ = this.cartService.cart$;

    this.product$ = this.cartService.cart$
        .pipe(
          map((products: []) => {
      const distintos = [...new Set(products)];
      return distintos;
    }));

  }

  ngOnInit(): void {
  }

}
