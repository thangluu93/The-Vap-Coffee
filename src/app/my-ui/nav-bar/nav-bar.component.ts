import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor(public router:Router,public dialog:MatDialog,public msg:MessengerService) { }

  ngOnInit(): void {
  }

  onClickLogin(){
   this.router.navigate (['/login']);
  }

  onClickHome(){
    this.router.navigate([''])
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      width: '250px',
      data: this.msg.getMsg()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}


