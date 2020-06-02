import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  
  @Input() cartItem: any
  constructor() { }

  ngOnInit(): void {

  }

  print(){
    console.log(this.cartItem);
  }

  
}
