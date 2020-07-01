import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { MessengerService } from 'src/app/services/messenger.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Product} from './../../models/product'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public msg: MessengerService,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public snackBar: MatSnackBar,
  ) {
    this.getCartQty();
    // console.log(this.msg.cart);
    // console.log(this.cart);
   }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  cart=[];
  getCartQty(){
    this.cart=this.msg.getMsg();
    console.log(this.cart);
    
  }

  avt = '';
  ngOnInit(): void {
    this.afAuth.user.subscribe((users) => {
      this.avt = users.photoURL;
    });
  }

  signout() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['home']);
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      width: '250px',
      data: this.msg.cart
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


