import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule) 
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/shipping-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'cart-modal/:id',
    resolve:{
      special: DataResolverService
    },
    loadChildren: () => import('./pages/shipping-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'add-address-modal',
    loadChildren: () => import('./pages/add-address-modal/add-address-modal.module').then( m => m.AddAddressModalPageModule)
  },
  {
    path: 'display-checkout-modal',
    loadChildren: () => import('./pages/display-checkout-modal/display-checkout-modal.module').then( m => m.DisplayCheckoutModalPageModule)
  },
  {
    path: 'pay-modal',
    loadChildren: () => import('./pages/pay-modal/pay-modal.module').then( m => m.PayModalPageModule)
  }


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
