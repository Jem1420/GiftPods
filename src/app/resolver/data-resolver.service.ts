import { Injectable } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{

  constructor(private cartService: CartService) { }

  resolve(route: ActivatedRouteSnapshot){
    let id = route.paramMap.get('id');
    return this.cartService.getData(id);
  }
}
