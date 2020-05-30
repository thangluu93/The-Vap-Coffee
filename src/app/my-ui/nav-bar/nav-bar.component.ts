import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  onClickLogin(){
   this.router.navigate (['/login']);
  }

  onClickHome(){
    this.router.navigate([''])
  }

}
