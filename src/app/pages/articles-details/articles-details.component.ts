import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticlesDetailsServiceService} from '../../services/articles-details-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-articles-details',
  imports: [HttpClientModule],
  templateUrl: './articles-details.component.html',
  styleUrl: './articles-details.component.scss'
})
export class ArticlesDetailsComponent {
  public details: any = []

  constructor(private activatedRoute: ActivatedRoute,
              private articlesDetailsService: ArticlesDetailsServiceService,
              private http : HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    const articleID = this.activatedRoute.snapshot.paramMap.get('id',);
    this.articlesDetailsService.getDetails().subscribe({
      next: data => {
        if (data.code == "200" && data.data && articleID) {
          this.details = data.data.find((article: any) => article.id.toString() === articleID);
        }
        if (!this.details) {
          alert(`No details found with id ${articleID}`);
        }
      },
      error: err => {
        alert(`Erreur lors de la récupération des détails: ${err.message}`);
      }
    })
  }

  public onClickDeleteArticle(id: any) {
    this.http.delete(`http://localhost:3000/articles/${id}`).subscribe({
      next: data => {
        alert(`Article effacé avec succès`);
        this.router.navigate(['/ListeArticles']);
      }
    })
}
}
