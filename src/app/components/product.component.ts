import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../producto.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {

    @Input() product: Product;
    @Output() addCart: EventEmitter<any> = new EventEmitter();

    agregar(){
        console.log('Añadido');
        this.addCart.emit(this.product.id);
    }
    /* Se hace con Input
    products: Product[] = [
        {
          id: '1',
          image: 'assets/images/camiseta.png',
          title: 'Camiseta',
          price: 80000,
          description: 'bla bla bla bla bla'
        }
    ];
    */
}
