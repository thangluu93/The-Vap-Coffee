import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from '../models/orders.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeLineService {
  orders = [];
  orderCollection: AngularFirestoreCollection<Order> = null;
  constructor(public http: HttpClient, private db: AngularFirestore) {
    this.orderCollection = this.db.collection<Order>('orders')
  }


  order$: Observable<any>
  getOrderFromServer() {
    return this.order$ = this.orderCollection.snapshotChanges()
  }


}
