import { Component } from '@angular/core';
import {ArticlesListServiceService} from '../../services/articles-list-service.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-liste-articles',
  imports: [
    HttpClientModule],
  templateUrl: './liste-articles.component.html',
  styleUrl: './liste-articles.component.scss'
})
export class ListeArticlesComponent {

  constructor(private articleService : ArticlesListServiceService) {
  }

  public articles : any[] = []
  public onClickArticlesList() {
    this.articleService.getArticles().subscribe({
      next: data => {
        if (data.code == "200") {
          this.articles = data.data
        }
      }
    })
  }

  public onClickGoDetails(id : number) {
    window.open(`http://localhost:4200/ListeArticles/${id}`, "_self")
  }

  public onClickAddArticles() {
    window.open("http://localhost:4200/AddArticles", "_self");
  }
}
