import { Component, OnInit } from '@angular/core';
import { MakeLineService } from 'src/app/services/make-line.service';

@Component({
  selector: 'app-make-line',
  templateUrl: './make-line.component.html',
  styleUrls: ['./make-line.component.scss'],
})
export class MakeLineComponent implements OnInit {
  constructor(public makeline: MakeLineService) {
    // this.makeline.getOrderFromServer();
    this.getOrder();


  }

  ngOnInit(): void { }
  allOrders;
  getOrder() {
    return this.makeline.getOrderFromServer().subscribe(data => {
      this.allOrders = data.map(e => e.payload.doc.data())
    });

  }
  test() {
    console.log(this.allOrders);

  }

  done(id){
    this.makeline.update(id);
  }

  cancel(id){
    this.makeline.delete(id);
  }
}
