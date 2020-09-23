import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cart = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    // this.cartService.getData(this.product);
    // this.product=this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }
  openCart(){
    
  }
}
