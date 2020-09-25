import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.page.html',
  styleUrls: ['./prod-detail.page.scss'],
})

export class ProdDetailPage implements OnInit {
  cart: any = [];
  product: any = [];
  cartItemCount: BehaviorSubject<number>;
  singleProd: any =[];
  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) { 
    let id;
  this.route.params.subscribe(product => {
    id = product.id;
  })
  }

  ngOnInit() {
    this.product = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.singleProd = this.cartService.getItem();
  }
  
  removeSingleProd(product){
    this.cartService.removeItem(product);
  }

  addToCart(product){
    this.cartService.addProduct(product);
    this.router.navigateByUrl('/my-cart');
  }

  
  // decreaseCartItem(product){
  //   this.cartService.decreaseProduct(product);
  // }
  
  // increaseCartItem(product){
  //   this.cartService.addProduct(product);
  // }

  // removeCartItem(product){
  //   this.cartService.removeProduct(product);
  // }

  // getTotal(){
  //   return this.cart.reduce((i,j) => i+j.price * j.amount, 0)
  // }

  // OpenShipping(){
  //  this.cartService.setData(1,this.cart);
  //  this.router.navigateByUrl('/cart-modal/1');
  // }

}
