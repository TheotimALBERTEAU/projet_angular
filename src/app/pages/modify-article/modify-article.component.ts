import {Component} from '@angular/core';
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
  public title = "";
  public desc = "";
  public author = "";
  public imgPath = "";

  constructor(private articleService : ArticlesListServiceService,
              private http : HttpClient,) {
  }

  public articles : any[] = []

  public selectedArticle : any = {};

  ngOnInit() {
    this.articleService.getArticles().subscribe({
      next: data => {
        if (data.code == "200") {
          this.articles = data.data
        }
      }
    })
  }

  public selectArticle(article : any): void {
    this.selectedArticle = article;
  }

  sendFormData() {
    const articleData : any = {
      "id" : this.selectedArticle.id,
      "title" : this.selectedArticle.title,
      "desc" : this.selectedArticle.desc,
      "author" : this.selectedArticle.author,
      "imgPath" : this.selectedArticle.imgPath,
    }

    if (this.title !== '') {
      articleData["title"] = this.title;
    }

    if (this.desc !== '') {
      articleData["desc"] = this.desc;
    }

    if (this.author !== '') {
      articleData["author"] = this.author;
    }

    this.http.post('http://localhost:3000/articles/save', articleData).subscribe({
      next: () => {
        alert("Article modifié avec succès");
      }
    })
    window.location.reload();

  }
}
