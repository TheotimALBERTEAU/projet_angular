import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoginServicesService} from './services/login-services.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private loginService : LoginServicesService) { }
  title = 'projet_angular';

  public onClickGoList() {
    window.open('http://localhost:4200/ListeArticles', '_self');
  }

  public onClickLogin() {
    window.open('http://localhost:4200/Login', '_self');
  }

  public onClickLogout() {

  }
}
