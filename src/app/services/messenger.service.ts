import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor(public http: HttpClient) { }

   cart=[];


  sendMsg(product) {
    // console.log(product);
    this.addProductTocart(product);
  }

  getMsg() {
    return this.cart;
  }

  // getCheckout(data) {
  //   return this.http.post(environment.ENPOINT + '/checkout', data);
  // }

  checkoutCart() {
      this.http.post(environment.ENPOINT+'/checkout',this.cart).subscribe(data => {
        console.log(data);    
      })
   
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

  }

}

export interface Drink {
  id: Number
}
