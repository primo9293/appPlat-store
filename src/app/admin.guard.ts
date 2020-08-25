import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './core/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      // tap permite debuggear, console.log, o hacer acciones
      // tap(userd => console.log(userd)),
      map(userData => userData === null ? false : true),
      tap(hasUser => {
        // Si no hay usuario activo redirreciona al component de Login
        if ( !hasUser ) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }

}
