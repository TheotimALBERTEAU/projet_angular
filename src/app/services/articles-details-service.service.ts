import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ArticlesDetailsServiceService {

  constructor(private http: HttpClient) {
  }

  public ApiUrl = 'http://localhost:3000'

  getDetails(): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/articles`)
  }
}
