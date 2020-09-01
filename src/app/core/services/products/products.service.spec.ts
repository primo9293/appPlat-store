import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  // let service: ProductsService;
  const urlApi = environment.url_api;
  let httpClient: HttpClient;
  let httptestingContro: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httptestingContro = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
    // service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('tests for getAllProducts', () => {

    it('should return products', () => {

      // arrange
    const expectData = [
      {
        id: '1',
        title: 'zxc',
        price: 2300,
        description: 'cxzccxzcxzcxc',
        image: 'img/img.jpg'
      },
      {
        id: '2',
        title: 'asd',
        price: 3200,
        description: 'dsadasdasdasd',
        image: 'img/img.jpg'
      }
    ];
    let dataError, dataResponse;
    // actuar
    service.getAllproducts()
           .subscribe(response => {
             dataResponse = response;
           }, error => {
              dataError = error;
           });
      const req = httptestingContro.expectOne(this.urlApi);
      req.flush(expectData);
      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
