import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth) { }

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

}
