import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAddressModalPage } from './add-address-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddAddressModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAddressModalPageRoutingModule {}
