import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';


const routes: Routes = [
  /* Son renderizados en el layout ya que son hijos de layout
  { path: 'home',  component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'contact', component: ContactComponent},
  */
  // Vacio component redirreciona a home
  { path: '',
    component: LayoutComponent,
    /* Como uso un componente padre, estos dos deben ir adentro incluidos
    pathMatch: 'full',
    redirectTo: 'home',
    */
    children: [
      { path: '',
      redirectTo: 'home',
      pathMatch: 'full'
      },
      { path: 'home',
        // Antes component: HomeComponent
        // Despues - Coloco el LoadChildren para cargar un module
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'products',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
  // Cualquier path diferente nombre redirreciona a home
  // { path: '**', pathMatch: 'full', redirectTo: 'home' }
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Para que la carga sea mas eficiente
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
