import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration} from '@ionic-native/paypal/ngx';
import { CartService, Product } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.page.html',
  styleUrls: ['./pay-modal.page.scss'],
})
export class PayModalPage implements OnInit {

  cart: Product[] =[];
  data : any;

  paymentAmount: string = '99.99';
  currency: string = 'PHP';
  currencyIcon: string = '₱';

  responseData: any = '';

  ngOnInit() {
    this.cart = this.cartService.getCart();
    if(this.route.snapshot.data['special']){
      this.cart = this.route.snapshot.data['special']
    }
   if (this.data = this.router.getCurrentNavigation().extras.state){
      this.data = this.router.getCurrentNavigation().extras.state.user
    }
  }
  constructor(private payPal: PayPal,private cartService: CartService, private router:Router,private route: ActivatedRoute) { }
  
  placeOrder() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AU3Wr9FDwWUU8bajTiPZ8O1yGNcKK7xeSTMnNnHYBzPdKPQzKf9UTECWFcUtq7XCs1-NovM9mdnTrKxb'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {

        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          this.responseData = JSON.stringify(res, null, 1);
          // Successfully paid

         
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }
  getTotal(){
    return this.cart.reduce((i,j) => i+j.price * j.amount, 0)
  }

  getAmount(){
    return this.cart.reduce((i,j)=> i+j.amount + 0, 0)
  }

}
