import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'messages',
        loadChildren:() => import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'my-cart',
        loadChildren: () => import('../pages/my-cart/my-cart.module').then(m => m.MyCartPageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('../pages/my-account/my-account.module').then(m => m.MyAccountPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
