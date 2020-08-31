import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  // next lo que hace es que despues de que lo intercepto continue y es de tipo HttpHandler
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    request = this.addToken(request);
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>){
    // antes const token = '123.abc';
    // Despues
    const token = this.tokenService.getToken();
    console.log('token_ ', token);
    if (token) {
      request = request.clone({
        setHeaders: {
          token
        }
      });
      return request;
    }
    // Si no hay token entonces se va por el lado qeu no cumplio el if
    return request;
  }
}
