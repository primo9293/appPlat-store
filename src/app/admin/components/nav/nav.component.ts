import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  usuar: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private auth: AuthService,
              private router: Router) {}

  ngOnInit(): void {
  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // Add 'implements OnInit' to the class.
  // this.revisarUer();
  }

  logout(){
    this.auth.logout()
        .then(() => {
          this.router.navigate(['./home']);
        });
  }

  // Si hay usuario me retorna un json con la información, si no me genera un null
  /* revisarUer(){
     this.auth.hasUser()
                        .subscribe(user => {
                         this.usuar = user;
                         console.log(user);
                        });
  } */

}
