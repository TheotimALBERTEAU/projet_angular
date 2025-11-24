import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoginServicesService} from './services/login-services.service';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public loginService : LoginServicesService,
              public router : Router) { }
  title = 'projet_angular';

  public onClickGoList() {
    this.router.navigate([`/ListeArticles`]);
  }

  public onClickLogin() {
    this.router.navigate([`/Login`]);
  }

  public onClickSignup() {
    this.router.navigate([`/Signup`]);
  }

  public onClickLogout() {
    this.loginService.logout();
  }

  protected readonly localStorage = localStorage;

  public onClickGoSettings() {
    this.router.navigate([`/Settings`]);
  }
}
