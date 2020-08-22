import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.buildForm();
   }

  ngOnInit(){
    this.activeRoute.params.subscribe(( params: Params ) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
          .subscribe( product => {
            this.form.patchValue(product);
          });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [ Validators.required]],
      price: ['', [ Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [ Validators.required]],
    });
  }

  saveproduct(event: Event){
    // Para que no haga refresh
    event.preventDefault();
    // Refresh
    if ( this.form.valid){
     const producte = this.form.value;
     this.productsService.updateProduct(this.id, producte)
         .subscribe((newProduct) => {
            console.log(newProduct);
            this.router.navigate(['./admin/products']);
         });
    }
    console.log(this.form.value);
  }

  get priceField() {
    return this.form.get('price');
  }

}