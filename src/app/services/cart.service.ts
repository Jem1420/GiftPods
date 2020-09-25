import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Storage} from '@ionic/storage';

export interface Product{
  id: number;
  name: string;
  price: number;
  desc: string;
  category: string;
  amount: number;
  imgUrl: string;
}

export interface Slider{
  id: number,
  imgUrl: string
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[]=[
    {id: 0, name: 'Eiffel Tower Light',category:'Lamp', desc: 'Style: Fashion Material: PMMA Light Source: LED Voltage: 1VPower Consumption: 1WBatteries: 3Pcs LR44 Batteries, 3Pcs AG10 Batteries Features: Cute, LED Night Light, Eiffel Tower Shape, Creative, Size: 7.5cm x 7.5cm x 20cm/2.95" x 2.95" x 7.87" (Approx.)', price: 134, amount:1, imgUrl:'https://1.bp.blogspot.com/--1nuFTrB5Tg/X21tX07VbiI/AAAAAAAAAkU/RgkGPovXEEAB197nD_kR0OR4AMotBoU0ACLcBGAsYHQ/s16000/prod1.jpg'},
    {id: 1, name: 'Gift Box Small Bouquet',category: 'Flowers', desc: 'Name: Artificial Rose Valentine s Gift. Material: artificial flower. Length: 29 * 19 * 9cm. Weight: 350G' ,price: 315, amount:1, imgUrl:'https://1.bp.blogspot.com/--p-N6VT52ck/X21tYLsmMlI/AAAAAAAAAkY/blDkRxYkn3g_nZpObvm8OhQfU584jFaZgCLcBGAsYHQ/s16000/prod2.jpg'},
    {id: 2, name: 'Rose Flower Lamp',category: 'Lamp', desc:'product features: Item: Valentines Day Eternal Flower Glass Cover Decoration. Color: transparent. Material: glass dome, pine bottom, flannel rose. Uses: decorations, gifts. Light color: warm white. Switch: ON / OFF. Technical support: 3 x AAA batteries (not included). Product size: about 22x11.4 cm / 8.7x4.5 inches', price: 550, amount:1, imgUrl:'https://1.bp.blogspot.com/-AWwV7sDgfXk/X21tYytVD0I/AAAAAAAAAkg/5iH5VkQrOqEl0nlktoWpGMfUFsMCF8PnACLcBGAsYHQ/s320/prod3.jpg'},
    {id: 3, name: 'Rose soap flower',category: 'Soap', desc:'Dried flowers and eternal flowers belong to natural plants. It is normal to have petals and leaves falling during the transportation of goods. Dont panic, do not affect the shape of the whole bouquet, and remove the fallen petals and leaves.' ,price: 287, amount:1, imgUrl:'https://1.bp.blogspot.com/-eJEbSncdDPg/X21tZAkHAUI/AAAAAAAAAkk/4pAqEYOfYnkXQ2MT7zs56NRCB1Gb0mQnQCLcBGAsYHQ/s16000/prod4.jpg'},
    {id: 4, name: 'Beauty & The Beast Lamp',category: 'Lamp', desc:'LED light bar with glass lampshade creates a romantic and romantic atmosphere for lovers.', price: 50, amount:1, imgUrl:'https://1.bp.blogspot.com/-_IZK0EH-US8/X21tZYLnWPI/AAAAAAAAAko/kZQ1-8LkoMgzqX1_KYdYU7zbvugjWho4ACLcBGAsYHQ/s16000/prod5.jpg'},
    {id: 5, name: 'Coffee Gift Set', category: 'Beverages', desc:'#gift #giftbox #giftset #souvenirs #souvernirph #giveaways #sponsors', price: 540, amount:1, imgUrl:'https://1.bp.blogspot.com/-97AffZ5ZJvk/X21tZ_GiahI/AAAAAAAAAks/9bFVvY1UQdkB9XbprsDjcPSVzxKLFDyLACLcBGAsYHQ/s16000/prod6.jpg'},
    {id: 6, name: '3D Moon Lamp', category: 'Lamp', desc:'Touch the metal ring at the bottom of the moon lamp to turn on / off the light and change color from white to yellow. Long press the metal ring to adjust the brightness, and it has the brightness memory function.' ,price: 446, amount:1, imgUrl:'https://1.bp.blogspot.com/-TJRpWcmxmd8/X21tZ4EmhBI/AAAAAAAAAkw/MErkXlPaZdMRaOxlW4z20slj8b_iTiIDgCLcBGAsYHQ/s16000/prod7.jpg'},
    {id: 7, name: 'LED Starry Night Sky',category: 'Lamp', desc: 'There could be some slight differences in the color tone of the pictures and the actual item. Please allow 1-2mm differs due to manual measurement, thanks.', price: 169, amount:1, imgUrl:'https://1.bp.blogspot.com/-B4wdXCUi16M/X21vbyxVYfI/AAAAAAAAAlc/kdkjEMYDgdsOOUuAFxkAAuL5_ULCFjolgCLcBGAsYHQ/s16000/prod66.jpg'},
    {id: 8, name: 'Vertical Bar Necklace',category: 'Necklace', desc: '#Necklace #Jewelry #stainlesssteel #BarNecklace #AnniversaryGift #lovegifts #crystalnecklace', price: 155, amount:1, imgUrl:'https://1.bp.blogspot.com/-7wdVbdWv884/X21taKOlhDI/AAAAAAAAAk0/mIvgB--AhB4noCkbngI7b3bLQIoo2NKRgCLcBGAsYHQ/s16000/prod8.jpg'},
    {id: 9, name: 'Soup Flower Bouquet', category: 'Flowers', desc: 'May damage po ang box. The itself has no damage at all. Perfect for gift, hindi nasisira. Natutunaw kpag binasa sa tubig, soap po kc ang petal nya.' ,price: 199, amount:1, imgUrl:'https://1.bp.blogspot.com/-Kyb8InQiptA/X21tap3BJmI/AAAAAAAAAk4/eNJzRV1uKHshFoCEn6Lb6rnNAmM-lHsVwCLcBGAsYHQ/s16000/prod9.jpg'},
    {id: 10, name: 'LED Teddy Bear',category: 'Stuff Toys', desc:'Inside with LED device, include more than 7 Changing colors, can shine up after equipped with batteries. When you place 2 AA batteries in it, please press the button on the right of the arm, and it will light up. If you press it again, it will turn off.' , price: 315, amount:1, imgUrl:'https://1.bp.blogspot.com/-EzEksPWS_E4/X21tYAYvpDI/AAAAAAAAAkc/1fy7tDmT8QsplOebn8sojMXXyMQv4wQyQCLcBGAsYHQ/s16000/prod10.jpg'},
    
  ];
  dataPic: Slider[]=[
    {id:0, imgUrl:'https://www.waltonwoodfarm.com/wp-content/uploads/elementor/thumbs/Gift-giving-o4hqiwu74tzsw055ixq0ipjq0gtd3od3q02rzs896w.jpg'},
    {id:1, imgUrl:'https://1.bp.blogspot.com/-XNpVfTMgG04/X2p8b4LwsoI/AAAAAAAAAkA/wPbBPjxFoygFUaCpG-pFp02r9Spirdn-wCLcBGAsYHQ/s16000/self-partnered-flowers.jpg'},
    {id:2, imgUrl:'https://1.bp.blogspot.com/-4nIXFE7hC-k/X2p8b1o9RHI/AAAAAAAAAj8/XyBaSABZewcMZFK02Xmq6MteGws5VTfwwCLcBGAsYHQ/s16000/infinity_symbol_banner_dt.jpg'},
    {id:3, imgUrl:'https://1.bp.blogspot.com/-28S-PFGVBKM/X2p8b81FDjI/AAAAAAAAAj4/VI2gZQ3u2zwFNb46R-nV_vDfLu5yZ9rQgCLcBGAsYHQ/s16000/featured_art_gift_istock.jpg'},
  
  ];
  localData=[];
  local=[];
  cart =[];
  singleProd =[];
  
  private cartItemCount = new BehaviorSubject(0);
  constructor(private localStorage:Storage) { }
  
  setData(id, data){
    this.data[id] = data;
  }

  getData(id){
    this.data[id];
  }

  getProduct(){
    this.saveProduct();
    return this.localData=JSON.parse(localStorage.getItem('product'))
  }
  
  saveProduct(){
    if(this.data ===[]){return;}
    localStorage.setItem('product', JSON.stringify(this.data));
  }

  getCart(){
    this.saveCart();
    return this.cart = JSON.parse(localStorage.getItem('cart'))
  }
  
  saveCart(){
    if(this.cart ===[]){return;}
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }


  getCartItemCount(){
   return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for (let p of this.cart) {
      if (p.id===product.id) {
        p.amount++;
        added = true;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        break;
      }
    }if (!added) {
      this.cart.push(product);
      this.saveCart();
    } 
    this.cartItemCount.next(this.cartItemCount.value + 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  decreaseProduct(product){
    for (let [index,p] of this.cart.entries()) {
      if(p.id === product.id){
        p.amount -= 1;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        if (p.amount == 0) {
          this.cart.splice(index,1);
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        p.amount=p.amount-p.amount+1;
        
        this.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        // console.log(this.cart);
        
      }
      
  }

}

getItem(){
  this.saveItem();
  return this.singleProd = JSON.parse(localStorage.getItem('singleProd'))
}
saveItem(){
  if(this.singleProd ===[]){return;}
  localStorage.setItem('singleProd', JSON.stringify(this.singleProd));
}

getSingleProd(product){
  let added = false;
  for (let p of this.singleProd) {
    if (p.id===product.id) {
      p.amount++
      added = true;
      localStorage.setItem('singleProd', JSON.stringify(this.singleProd));
      break;
    }
  }if (!added) {
    this.singleProd.push(product);
    this.saveItem();
  } 
  localStorage.setItem('singleProd', JSON.stringify(this.singleProd));
}

removeItem(product) {
  for (let [index, p] of this.singleProd.entries()) {
    if (p.id === product.id) {
      p.amount=p.amount-p.amount+1;
      
      this.singleProd.splice(index, 1);
      localStorage.setItem('singleProd', JSON.stringify(this.singleProd));
      // console.log(this.singleProd);
      
    }
    
}

}

getSlider(){
  if (this.dataPic === [] ) {
    return;
  }
  localStorage.setItem('slider', JSON.stringify(this.dataPic))
  return this.localData=JSON.parse(localStorage.getItem('slider'))
}
}
