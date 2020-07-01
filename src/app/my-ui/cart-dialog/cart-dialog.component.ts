import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {

  cartItem = [
    // { id: 1, name: 'Cà phê sữa', price: 29, qty: 1 },
    // { id: 3, name: 'Caramel Machiato', price: 55, qty: 1 }
  ];

  cartTotal = 0;
  constructor(private msg: MessengerService, public http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {

    this.cartItem = this.msg.getMsg();
    this.checkUser();
    this.checkoutCart();

  }

  user;
  checkUser() {
    this.auth.user$.subscribe((data) => {
      this.user = data;
      console.log(this.user);

    });
  }

  addProductTocart(product: Product) {

    let productExsit = false;

    for (let i in this.cartItem) {
      if (this.cartItem[i].id === product.id) {
        this.cartItem[i].qty++;
        productExsit = true;
        break;
      }
    }
    // console.log(productExsit);
    if (!productExsit) {
      this.cartItem.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1
      })

    }
  }



  checkoutCart() {
    if (this.user != null) {
      this.msg.checkoutCart();
      console.log('checkout');
    } else {
      console.log("not loggin");
    }
  }
}


