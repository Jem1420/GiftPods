import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
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

  sliderOptions={
    autoplay:{
      delay:2000
    }, loop :true
  }

  constructor(private cartService: CartService, private modalCtrl: ModalController, private LoadController: LoadingController) { }

  async ngOnInit() {
    this.slider = this.cartService.getSlider();
    this.product = this.cartService.getProduct();
    this.cartItemCount = this.cartService.getCartItemCount();
    const loader:HTMLIonLoadingElement = await this.LoadController.create({
      message:'Getting Products..',
      spinner: 'circles',
      animated: true
    })
      await loader.present().then();
   

    setTimeout(async () => {
      await loader.dismiss().then();
      
    },4000);

  }

  addToCart(product){
    this.cartService.addProduct(product);
  }



  


}
