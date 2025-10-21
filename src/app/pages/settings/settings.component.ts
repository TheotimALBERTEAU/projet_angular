import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginServicesService} from '../../services/login-services.service';

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
              private loginService: LoginServicesService) {}

  public inputType: 'password' | 'text' = 'password';

  // Attention : Stocker le mot de passe en clair dans le frontend (même en localStorage) a ne pas faire
  public userPassword = localStorage.getItem('userPassword') || '********';

  public onClickResetPassword() {
    this.loginService.resetPassword();
  }

  public togglePasswordVisibility() {
    if (this.inputType === 'password') {
      const confirmed = confirm("Voulez-vous vraiment afficher votre mot de passe ?");
      if (confirmed) {
        this.inputType = 'text';
      }
    } else {
      this.inputType = 'password'; // On masque
    }
  }

  protected readonly localStorage = localStorage;
}
