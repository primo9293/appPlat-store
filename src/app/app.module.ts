import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing Principal
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
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
// Angular Fire2
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    // CartComponent,
    // ExponentialPipe ,
    // HighlightDirective,
    // ProductsComponent,
    // ContactComponent,
    // DemoComponent,
    // HeaderComponent,
    // FooterComponent,
    // PageNotfoundComponent,
    // ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
