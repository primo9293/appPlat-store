import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Routing Principal
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { LayoutComponent } from './anidado/layout/layout.component';
// Module
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Se comparte el header y footer
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// Se comparte el pipe y directive
// import { ExponentialPipe } from './pipe/exponential.pipe';
// import { HighlightDirective } from './directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    CartComponent,
    // ExponentialPipe ,
    // HighlightDirective,
    // ProductsComponent,
    ContactComponent,
    DemoComponent,
    // HeaderComponent,
    // FooterComponent,
    PageNotfoundComponent,
    // ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
