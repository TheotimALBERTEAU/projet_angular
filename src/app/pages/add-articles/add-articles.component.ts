import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';

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
  public ID = '';
  public title = '';
  public desc = '';
  public author = '';

  constructor(private http : HttpClient) {}

  sendFormData() {
    const articleData = {
      "ID" : this.ID,
      "title" : this.title,
      "desc" : this.desc,
      "author" : this.author,
    }
    this.http.post('http://localhost:3000/articles/save', articleData).subscribe({
      next: () => {
        alert("Article ajouté avec succès");

      }
    })
  }
}
