import { Component, OnInit } from '@angular/core';
import { MakeLineService } from 'src/app/services/make-line.service';

@Component({
  selector: 'app-make-line',
  templateUrl: './make-line.component.html',
  styleUrls: ['./make-line.component.scss']
})
export class MakeLineComponent implements OnInit {

  constructor(public makeline:MakeLineService) { }

  ngOnInit(): void {
     this.makeline.getOrderFromServer();
  }

}
