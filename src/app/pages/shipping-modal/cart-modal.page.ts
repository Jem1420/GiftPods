import { Component, OnInit } from '@angular/core';
import { CartService, Product } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: Product[] =[];
  constructor(private cartService: CartService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    if(this.route.snapshot.data['special']){
      this.cart = this.route.snapshot.data['special']
    }
  }

  getTotal(){
    return this.cart.reduce((i,j) => i+j.price * j.amount, 0)
  }

  getAmount(){
    return this.cart.reduce((i,j)=> i+j.amount + 0, 0)
  }

  addAddress(){
    this.router.navigateByUrl('/add-address-modal');
    // this.dataService.getCitiesData();
  }
  openPayModal(){
    this.router.navigateByUrl('/pay-modal');
   }
   

}
