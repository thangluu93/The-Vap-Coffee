import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public auth: AuthService, public router: Router
  ) { }

  ngOnInit(): void {
  }

  isLogin = false;

  async loginWithGoogle() {
    await this.auth.loginWithGoogle().then((u) => {
      console.log(u);
      this.router.navigate(['']);
    })
  }
}
