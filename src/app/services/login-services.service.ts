import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class LoginServicesService {

  constructor(private http: HttpClient,
              private router: Router) {
    this.login = localStorage.getItem('isLoggedIn') === 'true';
  }

  public login = false;

  public sendLogin(email : string, password : string) {
    const infos = {
      "email" : email,
      "password" : password,
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    this.http.post('http://localhost:3000/login', infos).subscribe({
      next: (response: any) => {
        if (response.code == "200") {
          alert("Login successfull");
          window.open("http://localhost:4200/ListeArticles", "_self");
          localStorage.setItem("isLoggedIn", "true");
          this.login = true;
          localStorage.setItem("token", response.data);
        } else {
          alert("Email/Password Invalid");
        }
      }
    })
  }

  public sendSignup(infos : any) {
    this.http.post('http://localhost:3000/signup', infos).subscribe({
      next: (response: any) => {
        if (response.code == "200") {
          alert("Signup successfull");
          window.open("http://localhost:4200/Login", "_self");
        } else {
          alert(response.message);
        }
      }
    })
  }

  public logout() {
    localStorage.removeItem('isLoggedIn');
    this.login = false;
    window.open("http://localhost:4200/ListeArticles", "_self");
    alert("Logout successfull");
  }

  public resetPassword() {
    const email = {
      "email" : localStorage.getItem("userEmail"),
    }
    const confirmed = confirm("Voulez-vous vraiment réinitialiser votre mot de passe ?")
    if (confirmed) {
      this.http.post('http://localhost:3000/reset-password', email).subscribe({
        next: (response: any) => {
          if (response.code == "200") {
            alert(response.message + "New password : " + response.data);
            navigator.clipboard.writeText(response.data);
          }
          this.logout();
          window.open("http://localhost:4200/Login", "_self");
        }
      })
    }
  }

  public passwordInputType: 'password' | 'text' = 'password';

  public confirmInputType: 'password' | 'text' = 'password';

  public togglePasswordVisibility(field: 'password' | 'confirm'): void {
    if (field === 'password') {
      this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
    } else if (field === 'confirm') {
      this.confirmInputType = this.confirmInputType === 'password' ? 'text' : 'password';
    }
  }
}
