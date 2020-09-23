import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayCheckoutModalPageRoutingModule } from './display-checkout-modal-routing.module';

import { DisplayCheckoutModalPage } from './display-checkout-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayCheckoutModalPageRoutingModule
  ],
  declarations: [DisplayCheckoutModalPage]
})
export class DisplayCheckoutModalPageModule {}
