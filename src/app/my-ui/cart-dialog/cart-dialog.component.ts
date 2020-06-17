import { Component, OnInit, Input, Inject } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private msg: MessengerService) {
  }

  ngOnInit(): void {

    // this.msg.getMsg().subscribe((product: Product) => {
    //   // console.log(product);
    //   this.addProductTocart(product);
    // });

    console.log(this.data);
  }

  checkoutCart(){
    this.msg.checkoutCart();
  }
}


