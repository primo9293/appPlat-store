import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  product$: Observable<Product>;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) { }

  // Se optimiza con el SwitchMap
  // ngOnInit(): void {
  ngOnInit() {
     this.product$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.productsService.getProduct(params.id);
        })
      );
  }

  /* Se optimiza con el switchMap linea 20
  // ngOnInit(): void {
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      console.log(id);
      // this.product = this.productsService.getProduct(id);
      this.fetchProduct(id);
      console.log(this.product);
    });
  }*/

  fetchProduct(id: string){
    this.productsService.getProduct(id)
        .subscribe(productData => {
          console.log(productData);
          this.product = productData;
        });
  }

  crearproduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde Angular',
      image: 'assets/images/banner-1.jpg',
      price: 5000,
      description: 'Cargado desde Angular'
    };
    this.productsService.createProduct(newProduct)
        .subscribe(productData => {
          console.log(productData);
          this.product = productData;
        });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 2000,
      description: 'Edicion desde Angular'
    };
    this.productsService.updateProduct('2', updateProduct)
        .subscribe(productData => {
          console.log(productData);
          // this.product = productData;
        });
  }

  deleteProduct() {
    this.productsService.deleteProduct('10')
        .subscribe(productData => {  // Bien
          console.log(productData);
          // this.product = productData;
        },
        error => {
          console.log(error);
        });
  }

}
