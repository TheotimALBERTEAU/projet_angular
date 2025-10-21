import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoginServicesService} from './services/login-services.service';
import {HttpClientModule} from '@angular/common/http';

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
  constructor(public loginService : LoginServicesService) { }
  title = 'projet_angular';

  public onClickGoList() {
    window.open('http://localhost:4200/ListeArticles', '_self');
  }

  public onClickLogin() {
    window.open('http://localhost:4200/Login', '_self');
  }

  public onClickLogout() {
    this.loginService.logout();
  }

  protected readonly localStorage = localStorage;

  public onClickGoSettings() {
    window.open('http://localhost:4200/Settings', '_self');
  }
}
