import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';


import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // estilo aaaaa
  // total = 0;

  // Estilo bbbb
  total$: Observable<number>;

  constructor( private cartService: CartService ) {
    /* Estilo Observable Suscribe   estilo aaaaa
    this.cartService.cart$.subscribe( products => {
      console.log(products);
      this.total = products.length;
    });
    */

    /* Estilo RXJS con pipe flujo de datos de reactivos mas sofisticado  estilo aaaaa
    this.cartService.cart$
        .pipe(
          map( products => products.length)
        )
        .subscribe( totalDa => {
          this.total = totalDa;
        });
        */
    // Mas elegante todavia   Estilo bbbb
    // Y en el html del component header se le coloca el pipe async y ya el async hace lo de suscribirse y desuscribirse
    this.total$ = this.cartService.cart$
        .pipe(
          map( products => products.length)
        );


   }

  ngOnInit(): void {
  }

}
