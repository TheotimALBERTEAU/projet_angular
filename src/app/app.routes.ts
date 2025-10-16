import { Routes } from '@angular/router';
import {ListeArticlesComponent} from './pages/liste-articles/liste-articles.component';
import {ArticlesDetailsComponent} from './pages/articles-details/articles-details.component';
import {AddArticlesComponent} from './pages/add-articles/add-articles.component';
import {ModifyArticleComponent} from './pages/modify-article/modify-article.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

export const routes: Routes = [
  {path: 'ListeArticles', component: ListeArticlesComponent},
  {path: 'ListeArticles/:id', component: ArticlesDetailsComponent},
  {path: 'AddArticles', component: AddArticlesComponent},
  {path: 'ModifyArticle', component: ModifyArticleComponent},
  {path: 'Login', component: LoginPageComponent},
];
