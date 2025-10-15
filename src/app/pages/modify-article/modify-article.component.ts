import {Component, NgModule} from '@angular/core';
import {ArticlesListServiceService} from '../../services/articles-list-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modify-article',
  imports: [
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './modify-article.component.html',
  styleUrl: './modify-article.component.scss'
})
export class ModifyArticleComponent {

  public title = '';
  public desc = '';
  public author = '';
  public imgPath = '';

  constructor(private articleService : ArticlesListServiceService,
              private http : HttpClient,) {
  }

  public articles : any[] = []

  public selectedArticle: any = false;

  ngOnInit() {
    this.articleService.getArticles().subscribe({
      next: data => {
        if (data.code == "200") {
          this.articles = data.data
        }
      }
    })
  }

  public selectArticle(id : any): void {
    this.selectedArticle = id;
  }

  sendFormData() {
    const articleData = {
      "id" : this.selectedArticle,
      "title" : this.title,
      "desc" : this.desc,
      "author" : this.author,
      "imgPath" : this.imgPath,
    }
    this.http.post('http://localhost:3000/articles/save', articleData).subscribe({
      next: () => {
        alert("Article modifié avec succès");
      }
    })
    this.selectedArticle = false;
  }
}
