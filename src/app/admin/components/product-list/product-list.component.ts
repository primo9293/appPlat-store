import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsArr = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  // ngOnInit(): void {
  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllproducts()
        .subscribe( dataproducts => {
          this.productsArr = dataproducts;
        });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
        .subscribe( rta => {
          console.log(rta);
          this.fetchProducts();
        });
  }

}
