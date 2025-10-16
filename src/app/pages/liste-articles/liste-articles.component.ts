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
    if (this.loginService.login == true) {
      this.articleService.getArticles().subscribe({
        next: data => {
          if (data.code == "200") {
            this.articles = data.data
          }
        }
      })
    } else {
      alert("You are not logged in.");
    }
  }

  public onClickGoDetails(id : number) {
    if (this.loginService.login == true) {
      window.open(`http://localhost:4200/ListeArticles/${id}`, "_self")
    } else {
      alert("You are not logged in.");
    }
  }

  public onClickAddArticles() {
    if (this.loginService.login == true) {
      window.open("http://localhost:4200/AddArticles", "_self");
    } else {
      alert("You are not logged in.");
    }
  }

  public onClickModifyArticle() {
    if (this.loginService.login == true) {
      window.open("http://localhost:4200/ModifyArticle", "_self");
    } else {
      alert("You are not logged in.");
    }
  }
}
