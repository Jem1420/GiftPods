import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Storage} from '@ionic/storage';

export interface Product{
  id: number;
  name: string;
  price: number;
  amount: number;
  imgUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[]=[
    {id: 0, name: 'Eiffel Tower Light', price: 134, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.2&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_BrUTJyUgrOQ3rtr3dMfpMQaFfMdC4-_nfDbkirJf7aRF1DUCUN3NnMMjs6vYtXDkV517cgtuqk7X8OPmtPg7IAg_wcECvI6KyFc7l-TYRjsLUf_wEo7k17SY&disp=emb&realattid=ii_kfest8ts1'},
    {id: 1, name: 'Gift Box Small Bouquet', price: 315, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.8&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_iIIzxog3xuHkDZdpWpK0kE1GTFgRmaJ9BstO4iuTLFUMHSbagoDK2gdXZfXnP9PHi6zpU1ce9I0mgwKXImLmBGq4SO7T8Jc6-LVW-VRvktgh3g3SwCORK_WI&disp=emb&realattid=ii_kfesvj1o7'},
    {id: 2, name: 'Rose Flower Lamp', price: 550, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.9&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8Tm90ADBwdM-sRgA49h8oVI-Bl8nUrgFmHiBux_47Z5LvcGmQty0uC90qaVGB9oh3nXYP8zXc8uY4BPDbnYeCTfnnS2t9_cMys3L1aVHnDTeDymJ6r8McHZNM&disp=emb&realattid=ii_kfesvtmm8'},
    {id: 3, name: 'Rose soap flower', price: 287, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.7&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-SthxAfn3aU2KtL56pizsDsUfiR15Ns8K9XIWwDJCFGr5DExq9PShI23h_mb50RtWLA0Fc907GTEDVPn8rrNsEKufE5tJyowxFF1T0l1Sn_3of1iiQDoPpmaM&disp=emb&realattid=ii_kfesv1wb6'},
    {id: 4, name: 'Beauty & The Beast Lamp', price: 50, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.6&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8nRaGDJXBZcg2Qq4KoVekaX4L6sa9I3gZVmU6GkB50lrN-eScthZoeKxOVWVPlCihRdhRaketVmaBrDcT7yn8_kwok2Tk3XS8KrrgRO1j6hlOBmpEf5j_S8kc&disp=emb&realattid=ii_kfesuiu75'},
    {id: 5, name: 'Coffee Gift Set', price: 540, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.5&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8HZxN2uBssHUrIhlxTFh5oGJ-mXHEme_TpfIeEzn8HxsWJOncK6tCcf_exONRjkDJLixSHlI7Ij17HKVlUE2v1MzMBeMagc6HpSkSS_2hQBFW1gOTbxlZJEW0&disp=emb&realattid=ii_kfesu3w04'},
    {id: 6, name: '3D Moon Lamp', price: 446, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.4&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9enhE6FdXtUH3fYaidDlXOPDfo3DIcmPXgSR7kpbX0gU4yef69nzb5xm3NBkM8cQKwGt997i82qc9ehy900cK2Anur6ei8D4UU3s400drjvIJJjm96Q_RII1w&disp=emb&realattid=ii_kfests7k3'},
    {id: 7, name: 'LED Starry Night Sky', price: 169, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.3&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-NJj5EN7XHKFqK1PB6_UJrzx6DeeSOXOi8UXLA6BZvyQVoQZ85VwhJ95urFtzQsxQxBZaYTTQM0QhYIZB-oKcsdSs4EtRUr4xItbsUZ_5rDlcAfvCRwGrF2BY&disp=emb&realattid=ii_kfestg1j2'},
    {id: 8, name: 'Vertical Bar Necklace', price: 155, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.1&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8eyUomXmfRoI44iJ2x7CF6-LLdLHu0q_7aDV6tWmMip5eUL8sVg7sgEdAYJLY8VFAz46yNY5sPEeHn2HVI-gpqooABa3CzndG5IB06NIwXFlWW_WhbcaVhWvM&disp=emb&realattid=ii_kfesstfs0'},
    {id: 9, name: 'Soup Flower Bouquet', price: 199, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.10&permmsgid=msg-f:1678532552419260766&th=174b587692e1395e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_mXsyyyXpZzR17mPvFLJTqfiUz4IERXzRlOFyENFlieW0kzgULaX7jrHOsAG7PVNOHS5mxUttRqIwXV76Nel4LwwB2ZHJTRAeQTyy6Eav4RU3YYx5zTCVdQOk&disp=emb&realattid=ii_kfet55cn9'},
    {id: 10, name: 'LED Teddy Bear', price: 315, amount:1, imgUrl:'https://mail.google.com/mail/u/2?ui=2&ik=066023d0b1&attid=0.1&permmsgid=msg-f:1678532869156787221&th=174b58c051e85415&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-R9_vl3Bcj0_ssmoHfa8APz1gM0k3uvl5EV8Kh74ELm1DePzKeFcJH7b1XVHjVhxUJi1VgGHXe7mXDmCGyazz8GMzRN1Q1RtpTK_gEj-7g5h1WliVA7B7tb6I&disp=emb&realattid=ii_kfetaid80'},
    
  ];
  localData=[];
  cart =[];
  
  private cartItemCount = new BehaviorSubject(0);
  constructor(private storage:Storage) { }
  
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
}
