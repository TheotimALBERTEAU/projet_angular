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

  public login = false

  public sendLogin(email : string, password : string) {
    const infos = {
      "email" : email,
      "password" : password,
    }
    this.http.post('http://localhost:3000/login', infos).subscribe({
      next: (response: any) => {
        if (response.code == "200") {
          alert("Login successfull");
          window.open("http://localhost:4200/ListeArticles", "_self");
          localStorage.setItem("isLoggedIn", "true");
          this.login = true;
        } else {
          alert("Email/Password Invalid");
        }
      }
    })
  }

  public logout() {
    localStorage.removeItem('isLoggedIn');
    this.login = false;
    window.location.reload();
    alert("Logout successfull");
  }

  public resetPassword(email: string) {
    const emailforreset = {
      "email" : email,
    }
    this.http.post('http://localhost:3000/reset-password', emailforreset).subscribe({
      next: (response: any) => {
        if (response.code == "200") {
          alert(response.message + "New password : " + response.data)
        }
        window.open("http://localhost:4200/Login", "_self");
      }
    })
  }
}
