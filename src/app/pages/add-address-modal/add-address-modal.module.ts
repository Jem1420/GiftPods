import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAddressModalPageRoutingModule } from './add-address-modal-routing.module';

import { AddAddressModalPage } from './add-address-modal.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddAddressModalPageRoutingModule
  ],
  declarations: [AddAddressModalPage]
})
export class AddAddressModalPageModule {}
