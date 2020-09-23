import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CartModalPageModule } from './pages/shipping-modal/cart-modal.module';
import { AddAddressModalPageModule } from './pages/add-address-modal/add-address-modal.module';
import { ReactiveFormsModule} from '@angular/forms'

import { DataProviderProvinceService } from './providers/data-provider-province.service';

import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { PayPal } from '@ionic-native/paypal/ngx';

export function jwtOptionsFactory(storage){
  return{ 
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['192.168.100.6:5000']
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule,
     BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     CartModalPageModule, 
     ReactiveFormsModule,
     AddAddressModalPageModule,
     IonicStorageModule.forRoot(),
     JwtModule.forRoot({
      jwtOptionsProvider:{
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
     })],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataProviderProvinceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
