import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
// import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
// import { ExponentialPipe } from '../pipe/exponential.pipe';
// import { HighlightDirective } from '../directive/highlight.directive';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from './../material/material.module';
import { UniquePipe } from './pipes/unique/unique.pipe';



@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    UniquePipe
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    UniquePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
    // ExponentialPipe,
    // HighlightDirective
    // HeaderComponent,
    // FooterComponent
  ]
})
export class SharedModule { }
