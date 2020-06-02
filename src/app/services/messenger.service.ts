import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  cart = [];

  sendMsg(product) {
    // console.log(product);
   this.addProductTocart(product);
  }

  getMsg() {
    return this.cart;
  }

  addProductTocart(product: Product) {

    let productExsit = false;

    for (let i in this.cart) {
      if (this.cart[i].id === product.id) {
        this.cart[i].qty++;
        productExsit = true;
        break;
      }
    }
    // console.log(productExsit);
    if (!productExsit) {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1
      })
    }
    console.log(this.cart);

  }

}
