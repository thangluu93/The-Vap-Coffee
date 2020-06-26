import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app'
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  constructor(public afAuth: AngularFireAuth,public afs:Angular) {
    // this.afAuth.authState.subscribe(user => {
    //   this.user.email = user.email;
    //   this.user.name = user.displayName;
    //   this.user.photoURL = user.photoURL;
    // });
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
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