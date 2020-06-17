import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MakeLineService {
  socket;
  orders=[];
  constructor(public http: HttpClient) { }

  setupSocketConnection() {
    this.socket = io(environment.ENPOINT);
  }

  getOrderFromServer(){
    io.on('order',(msg)=>{
      this.orders.push(msg);
      console.log(this.orders);
    })
  }
  
}
