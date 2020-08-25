import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { ProductsService } from './../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router,
              private angularFireSto: AngularFireStorage) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  uploadFile(event){
   const file = event.target.files[0];
   // console.log(file);
   const namedirectorio = 'images';
   const fileRef = this.angularFireSto.ref(namedirectorio);
   // Tarea le enviamos la ruta y el archivo a subir
   const task = this.angularFireSto.upload(namedirectorio, file);

   task.snapshotChanges()
       .pipe(
         // Ruta qeu genera Firebase donde guardo la imagen
        finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
       .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [ Validators.required]],
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
     this.productsService.createProduct(producte)
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
