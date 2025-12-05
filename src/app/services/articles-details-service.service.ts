import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ArticlesDetailsServiceService {

  constructor(private http: HttpClient) {
  }

  public ApiUrl = 'https://projet-angular-back-24h5.onrender.com'

  getDetails(): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/articles`)
  }
}
