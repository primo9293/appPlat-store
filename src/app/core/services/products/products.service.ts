import { Injectable } from '@angular/core';
import { Product } from '../../../producto.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


interface User {
  email: string;
  gender: string;
  phone: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /*
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  */

  // let url = 'http://platzi-store.herokuapp.com/products/';
  urlApi = environment.url_api;
  constructor(private http: HttpClient) { }

  getAllproducts() {
    // return this.products;
    return this.http.get<Product[]>(this.urlApi);
  }

  getProduct(id: string) {
    // return this.products.find(item => id === item.id );
    return this.http.get<Product>(`${this.urlApi}${id}`);
  }

  createProduct(product: Product){
    return this.http.post<Product>(`${this.urlApi}`, product );
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put<Product>(`${this.urlApi}${id}`, changes );
  }

  deleteProduct(id: string){
    return this.http.delete<Product>(`${this.urlApi}${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  /*
  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      map((response: any) => response.results as User[])
      );
    }

      getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      catchError(error => {
        return throwError('Error');
      }),
      map((response: any) => response.results as User[])
    );
  }


    */

   getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3), // Se repite tres veces si llega a fallar
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  // Sentry para manejar errores

    private handleError(error: HttpErrorResponse) {
     console.log(error);
     return throwError('Ups algo salio mal');
   }

}
