import { SignUpComponent } from './../sign-up/sign-up.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { auth } from 'firebase';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    public snackBar: MatSnackBar,
    public authService: AuthService,
    public router: Router,
  ) { }


  hide= true;
  ngOnInit(): void {}
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getPasswordError() {
    return this.password.hasError('required') ? 'You must enter a password' :
        this.password.hasError('minLength') ? 'You password must have 8 characters' :
          '';
  }


  SignupDialog() {
    this.dialog.open(SignUpComponent,{
      width: '35%',
      height: '60%',
    });
  }

  signIn() {
    this.afAuth.signInWithEmailAndPassword(this.email.value, this.password.value).then(() => {
      this.snackBar.open('Success!', 'OK', {duration: 2000});
      this.router.navigate(['home']);
    }).catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });

  }

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credetial = await this.afAuth.signInWithPopup(provider);
    return this.authService.updateUserData(credetial.user)
    .then(() => {
      this.snackBar.open('Success!', 'OK', {duration: 2000});
      this.router.navigate(['home']);
    })
    .catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });
  }


}
