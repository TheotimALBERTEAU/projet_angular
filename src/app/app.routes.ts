import { Routes } from '@angular/router';
import {ListeArticlesComponent} from './pages/liste-articles/liste-articles.component';
import {ArticlesDetailsComponent} from './pages/articles-details/articles-details.component';
import {AddArticlesComponent} from './pages/add-articles/add-articles.component';
import {ModifyArticleComponent} from './pages/modify-article/modify-article.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SignupComponent} from './pages/signup/signup.component';
import {MainPageComponent} from './pages/main-page/main-page.component';

export const routes: Routes = [
  {path: 'ListeArticles', component: ListeArticlesComponent},
  {path: '', component: MainPageComponent},
  {path: 'ListeArticles/:id', component: ArticlesDetailsComponent},
  {path: 'AddArticles', component: AddArticlesComponent},
  {path: 'ModifyArticles', component: ModifyArticleComponent},
  {path: 'Login', component: LoginPageComponent},
  {path: 'Settings', component: SettingsComponent},
  {path: 'Signup', component: SignupComponent},

];
