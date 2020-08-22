import { Injectable } from '@angular/core';
// BehaviorSubject Principios reactivos
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';





@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  // Variable publica tipo Observable con el signo pesos $ y es la que puede ser escuchada o vista por cualquier componente
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    // Inserto por Mutación, creo un nuevo estado
    this.products = [...this.products, product];
    // Notifico que hubo un cambio y el componente que esta suscrito lo va a saber
    this.cart.next(this.products);
  }

}
