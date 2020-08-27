import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsContainer  } from '../product/container/products/products.container'
// import { ProductsComponent } from './components/container/products/products.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer
  ],
  exports: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer,
    MaterialModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule {

}
