import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [
    HttpClientModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  constructor(private http: HttpClient,
              private router: Router) { }

  onClickGoList(): void {
    this.router.navigate(['/ListeArticles']);
  }
}
