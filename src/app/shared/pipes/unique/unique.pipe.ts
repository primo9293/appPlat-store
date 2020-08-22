import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  products: Product[];

  constructor(private cartService: CartService){
  }

  transform(product: any, args?: any): any {
    let total = 0;
    this.cartService.cart$.subscribe(products => {
      products.forEach((elemento) => {
        if (elemento.id === product.id){
          total += 1;
        }
      });
    });
    return total;
  }

}
