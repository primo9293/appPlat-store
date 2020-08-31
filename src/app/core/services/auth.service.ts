import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';

import { TokenService } from './token.service';
// Ejecuta una tarea antes de devolverla al comoponente
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth,
              private http: HttpClient,
              private token: TokenService) { }

  createUser(email: string, password: string){
    return this.af.auth.createUserWithEmailAndPassword( email, password );
  }

  login(email: string, password: string){
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.af.auth.signOut();
  }

  // Hay un usuario activo
  hasUser(){
    // Es un observable
    return this.af.authState;

    /* this.af.authState
        .subscribe( user => {
          console.log(user);
        });
        */
  }

  loginRestApi(email: string, password: string){
    return this.http.post('https://platzi-store.herokuapp.com/auth', {
      email,
      password
    })
    .pipe(
      tap( (data: {token: string}) => {
        const token = data.token;
        this.token.saveToken(token);
      })
    )
  }

}
