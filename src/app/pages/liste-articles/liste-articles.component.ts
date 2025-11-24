import {Component} from '@angular/core';
import {ArticlesListServiceService} from '../../services/articles-list-service.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginServicesService} from '../../services/login-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  imports: [
    HttpClientModule],
  templateUrl: './liste-articles.component.html',
  styleUrl: './liste-articles.component.scss'
})
export class ListeArticlesComponent {

  public articles: any[] = []
  public ShowArticles: boolean = false;

  constructor(private articleService: ArticlesListServiceService,
              private loginService: LoginServicesService,
              private router: Router,) {
  }

  public onClickArticlesList() {
    if (this.loginService.login) {
      this.articleService.getArticles().subscribe({
        next: data => {
          if (data.code == "200") {
            this.articles = data.data;
            this.ShowArticles = true;
          }
        }
      })
    } else {
      alert("You are not logged in.");
    }
  }

  public onClickGoDetails(id: number) {
    if (this.loginService.login) {
      this.router.navigate([`/ListeArticles/${id}`])
    } else {
      alert("You are not logged in.");
    }
  }

  public onClickAddArticles() {
    if (this.loginService.login) {
      this.router.navigate([`/AddArticles`]);
    } else {
      alert("You are not logged in.");
    }
  }

  public onClickModifyArticle() {
    if (this.loginService.login) {
      this.router.navigate([`/ModifyArticles`]);
    } else {
      alert("You are not logged in.");
    }
  }
}
