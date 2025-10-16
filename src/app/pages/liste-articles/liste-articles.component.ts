import { Component } from '@angular/core';
import {ArticlesListServiceService} from '../../services/articles-list-service.service';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginServicesService} from '../../services/login-services.service';

@Component({
  selector: 'app-liste-articles',
  imports: [
    HttpClientModule],
  templateUrl: './liste-articles.component.html',
  styleUrl: './liste-articles.component.scss'
})
export class ListeArticlesComponent {

  constructor(private articleService : ArticlesListServiceService,
              private loginService : LoginServicesService) {
  }

  public articles : any[] = []
  public onClickArticlesList() {
    alert(this.loginService.login)
    if (this.loginService.login == true) {
      this.articleService.getArticles().subscribe({
        next: data => {
          if (data.code == "200") {
            this.articles = data.data
          }
        }
      })
    }
  }

  public onClickGoDetails(id : number) {
    window.open(`http://localhost:4200/ListeArticles/${id}`, "_self")
  }

  public onClickAddArticles() {
    window.open("http://localhost:4200/AddArticles", "_self");
  }

  public onClickModifyArticle() {
    window.open("http://localhost:4200/ModifyArticle", "_self");
  }
}
