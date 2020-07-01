import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor(public http: HttpClient, public auth: AuthService, private db: AngularFirestore) {
    this.checkUser()
  }

  cart = [];


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
  user;
  checkUser() {
    this.auth.user$.subscribe((data) => {
      this.user = data.email;
      // console.log(this.user);

    });
  }
  yourOrder;
  getYoutOrder() {
    this.yourOrder = this.db.collection('orders').doc(this.user).snapshotChanges();
    
  }


  async checkoutCart() {

    let order = {
      "id": new Date().getTime().toString(),
      "customer": this.user,
      "cart": this.cart,
      "status": "doing"
    }
    console.log(order);

    await this.http.post(environment.ENPOINT + '/checkout', order).subscribe(data => {
      console.log(data);
    })
    this.cart = [];

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
