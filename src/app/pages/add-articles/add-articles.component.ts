import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ArticlesDetailsServiceService} from '../../services/articles-details-service.service';

@Component({
  selector: 'app-add-articles',
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './add-articles.component.html',
  styleUrl: './add-articles.component.scss'
})
export class AddArticlesComponent {
  public title = '';
  public desc = '';
  public author = '';
  public imgPath = '';

  constructor(private http : HttpClient,
              private articlesDetailsService: ArticlesDetailsServiceService) {}

  sendFormData() {
    const articleData = {
      "title" : this.title,
      "desc" : this.desc,
      "author" : this.author,
      "imgPath" : this.imgPath,
    }
    this.http.post(`${this.articlesDetailsService.ApiUrl}/save`, articleData).subscribe({
      next: () => {
        alert("Article ajouté avec succès");
      }
    })
  }
}
