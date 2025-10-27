import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginServicesService} from '../../services/login-services.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  public email = '';
  public password = '';
  public passwordConfirm = '';
  public pseudo = '';
  public cityCode = '';
  public city = '';
  public phone = '';


  constructor(private http : HttpClient,
              public loginService : LoginServicesService) {}

  public onClickSignup() {
    const infos = {
      "email": this.email,
      "password": this.password,
      "passwordConfirm": this.passwordConfirm,
      "pseudo": this.pseudo,
      "cityCode": this.cityCode,
      "city": this.city,
      "phone": this.phone,
    }
    this.loginService.sendSignup(infos)
  }

}
