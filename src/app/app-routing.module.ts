import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { LayoutComponent } from './anidado/layout/layout.component';

import { AdminGuard } from './admin.guard';


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
      { path: 'home',
        // Antes component: HomeComponent
        // Despues - Coloco el LoadChildren para cargar un module
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      { path: 'contact', canActivate: [AdminGuard], component: ContactComponent},
    ]
  },
  // Cualquier path diferente nombre redirreciona a home
  // { path: '**', pathMatch: 'full', redirectTo: 'home' }
  { path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Para que la carga sea mas eficiente
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
