import { Component } from '@angular/core';
import {FormBuilder, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-articles',
  imports: [
    FormsModule,
  ],
  templateUrl: './add-articles.component.html',
  styleUrl: './add-articles.component.scss'
})
export class AddArticlesComponent {
  public ID : number = 0;
  public title = '';
  public desc = '';
  public author = '';
  public imgPath = '';

  sendFormData() {
    alert("article ajouté (enfait non c'est un test)")
  }
}
