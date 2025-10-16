import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginServicesService} from '../../services/login-services.service';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public email = '';
  public password = '';

  constructor(private http : HttpClient,
              private loginService : LoginServicesService) {}

  public onClickLogin() {
    this.loginService.sendLogin(this.email, this.password)
  }

  public onClickLogout() {
    this.loginService.logout()
  }

}
