import { Component, OnInit } from '@angular/core';
import { CartService, Product } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-checkout-modal',
  templateUrl: './display-checkout-modal.page.html',
  styleUrls: ['./display-checkout-modal.page.scss'],
})
export class DisplayCheckoutModalPage implements OnInit {
  cart: Product[] =[];
  data : any;
  // newDataArray: any[] =[];
  constructor(private cartService: CartService, private router:Router,private route: ActivatedRoute) { 
  }


  ngOnInit() {
    this.cart = this.cartService.getCart();
    if(this.route.snapshot.data['special']){
      this.cart = this.route.snapshot.data['special']
    }
   if (this.data = this.router.getCurrentNavigation().extras.state){
      this.data = this.router.getCurrentNavigation().extras.state.user
    }
  }


    getTotal(){
    return this.cart.reduce((i,j) => i+j.price * j.amount, 0)
  }
  openPayModal(){
    this.router.navigateByUrl('/pay-modal');
   }

}
