import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class LoginServicesService {

  constructor(private http: HttpClient,
              private router: Router,) {
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
          this.router.navigate(['/ListeArticles']);
          localStorage.setItem("isLoggedIn", "true");
          this.login = true;
          alert(this.login);
        } else {
          alert("Email/Password Invalid");
        }
      }
    })
  }

  public logout() {
    localStorage.removeItem('isLoggedIn');
    this.login = false;
  }
}
