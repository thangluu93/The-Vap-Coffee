import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app'
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, ) {
    this.afAuth.authState.subscribe(user => {
      this.user.email = user.email;
      this.user.name = user.displayName;
      this.user.photoURL = user.photoURL;
    })
  }



  public user: User = {
    email: '',
    name: '',
    photoURL: '',
  }

  isLogin = false;

  uid: string = "";

  loginWithGoogle() {
    return new Promise<any>((resolve, reject) => {
      let provider = new auth.GoogleAuthProvider();
      this.afAuth.signInWithPopup(provider).then((u) => {
        this.uid = u.user.uid;
        this.user.email = u.user.email;
        this.user.name = u.user.displayName;
        this.user.photoURL = u.user.photoURL;
        this.isLogin = true;
      })
    })
  }

}

interface User {
  email: string,
  name: string,
  photoURL: string,
}