import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../producto.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

    @Input() product: Product;
    @Output() addCart: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(){
        console.log('1 Constructor');
    }

    ngOnInit(){
        console.log('2 Init');
    }

    ngOnChanges(changes: SimpleChanges){
        // OnChanges es la forma nativa de mirar cambios
        // DoCheck es la forma personalizada de mirar cambios
        console.log('3 OnChanges');
        console.log(changes);
    }

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
