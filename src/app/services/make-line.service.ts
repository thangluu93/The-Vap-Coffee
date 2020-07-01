import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class MakeLineService {
  socket;
  orders = [];
  orderCollection:AngularFirestoreCollection<Order>=null;
  constructor(public http: HttpClient, private db: AngularFirestore) { 
    this.orderCollection=this.db.collection<Order>('orders')
  }


  getOrderFromServer() {
    this.orderCollection.snapshotChanges()
  }


}
