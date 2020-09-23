import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayCheckoutModalPage } from './display-checkout-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayCheckoutModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayCheckoutModalPageRoutingModule {}
