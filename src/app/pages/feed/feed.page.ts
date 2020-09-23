import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  cart: any = [];
  product: any = [];
  slider: any = [];
  cartItemCount: BehaviorSubject<number>;


  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.slider = this.cartService.getSlider();
    this.product = this.cartService.getProduct();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }



}
