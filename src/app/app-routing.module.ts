import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './anidado/layout/layout.component';


const routes: Routes = [
  /* Son renderizados en el layout ya que son hijos de layout
  { path: 'home',  component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'contact', component: ContactComponent},
  */
  { path: 'demo', component: DemoComponent},
  // Vacio component redirreciona a home
  { path: '',
    component: LayoutComponent,
    /* Como uso un componente padre, estos dos deben ir adentro incluidos
    pathMatch: 'full',
    redirectTo: 'home',
    */
    children: [
      { path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      { path: 'home',  component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'contact', component: ContactComponent},
    ]
  },
  // Cualquier path diferente nombre redirreciona a home
  // { path: '**', pathMatch: 'full', redirectTo: 'home' }
  { path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
