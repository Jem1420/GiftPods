import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController, IonSearchbar } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  //products var
  cart: any = [];
  product: any = [];
  slider: any = [];
  cartItemCount: BehaviorSubject<number>;

  //slider pics
  sliderOptions={
    autoplay:{
      delay:2000
    }, loop :true
  }

  //searchbar
  public list: Array<Object> = [];
  searchedItem: any;
  
  constructor(private cartService: CartService, private router: Router, private LoadController: LoadingController) {
    // this.list = [
    //   { title: "TechAssembler" },
    //   { title: "John" },
    //   { title: "technology" },
    //   { title: "Joshep" },
    //   { title: "Maria" },
    //   { title: "1234" },
    //   { title: "0987" },
    //   { title: "Pinty" },
    //   { title: "pini0987" }
    // ];
    this.list = this.cartService.getProduct();
    this.searchedItem = this.list;
   }
  
  @ViewChild('search', {static: false}) search: IonSearchbar;
  
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
  
  enterData(){
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  filterData(event){
    const val = event.target.value;

    this.searchedItem = this.list;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  addToSingleProd(product){
    this.cartService.getSingleProd(product);
  }
  addToCart(product){
    this.cartService.addProduct(product);
    this.router.navigateByUrl('/my-cart');
  }




  


}
