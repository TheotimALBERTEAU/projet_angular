import { Component } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
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

  public userInfo : any = "";

  ngOnInit() {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Erreur: Vous n'êtes pas connecté ou le token est manquant.");
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Format requis par le back-end
    });

    this.http.get('http://localhost:3000/infos-user', { headers: headers }).subscribe({
      next: (response : any) => {
        if (response.code == "200") {
          this.userInfo = response.data;
        } else {
          alert("Erreur API : " + (response ? response.message : "Réponse inattendue"));
        }
      },
      error: (err) => {
        // Erreur HTTP (401, 403, 404, etc.)
        alert("Échec de la requête : " + err.status);
      }
    })
  }

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
