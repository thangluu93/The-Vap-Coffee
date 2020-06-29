import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { MyUiModule } from 'src/app/my-ui/my-ui.module';
import { SignInComponent } from './sign-in/sign-in.component';


import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [LoginPageComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MyUiModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ]
})
export class LoginPageModule {}
