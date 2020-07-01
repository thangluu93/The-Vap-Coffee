import { Component, OnInit } from '@angular/core';
import { MakeLineService } from 'src/app/services/make-line.service';

@Component({
  selector: 'app-make-line',
  templateUrl: './make-line.component.html',
  styleUrls: ['./make-line.component.scss'],
})
export class MakeLineComponent implements OnInit {
  constructor(public makeline: MakeLineService) {
    this.makeline.getOrderFromServer();
    this.getOrder();
    console.log(this.orders);
  }

  ngOnInit(): void {}
  orders = [];
  getOrder() {
    this.makeline.getOrderFromServer().subscribe((data) => {
      data.docs.map((e) => {
        this.orders.push(e.data());
        console.log(this.orders)
      });
    });
  }
}
