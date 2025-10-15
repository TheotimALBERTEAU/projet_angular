import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
  public id = '';
  public title = '';
  public desc = '';
  public author = '';
  public imgPath = '';

  constructor(private http : HttpClient) {}

  sendFormData() {
    const articleData = {
      "id" : this.id,
      "title" : this.title,
      "desc" : this.desc,
      "author" : this.author,
      "imgPath" : this.imgPath,
    }
    this.http.post('http://localhost:3000/articles/save', articleData).subscribe({
      next: () => {
        alert("Article ajouté avec succès");
      }
    })
  }
}
