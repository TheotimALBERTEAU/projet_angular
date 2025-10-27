import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  imports: [
    HttpClientModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  constructor(private http: HttpClient) { }

  onClickGoList(): void {
    window.open('http://localhost:4200/ListeArticles', "_self");
  }
}
