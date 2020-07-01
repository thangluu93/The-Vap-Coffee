import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from '../models/orders.model';
import { Observable } from 'rxjs';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable({
  providedIn: 'root'
})
export class MakeLineService {
  orders = [];
  orderCollection: AngularFirestoreCollection<Order> = null;
  constructor(public http: HttpClient, private db: AngularFirestore) {
    this.orderCollection = this.db.collection('orders');
    this.getOrderFromServer() 
  }


  order$: Observable<any>
  getOrderFromServer() {
    return  this.db.collection('orders').snapshotChanges();
  }

 async update(id:string):Promise<void>{
   await this.db.collection('orders').doc(id).update({"status":"done"});
   return alert('ok')
  }

  async delete(id){
    await this.db.collection('orders').doc(id).delete();
    
  }
}
