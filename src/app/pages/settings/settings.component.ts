import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from '../login-page/login-page.component';

@Component({
  selector: 'app-settings',
  imports: [
    FormsModule,
    HttpClientModule,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(private http : HttpClient,
              private loginPage: LoginPageComponent) {}

  public onClickResetPassword() {
    this.loginPage.loginService.resetPassword(this.loginPage.email)
  }
}
