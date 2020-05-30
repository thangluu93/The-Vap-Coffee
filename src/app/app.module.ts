import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyUiModule } from './my-ui/my-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageModule } from './pages/login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //FireBase Auth
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,


    MyUiModule,
    BrowserAnimationsModule,
    LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
