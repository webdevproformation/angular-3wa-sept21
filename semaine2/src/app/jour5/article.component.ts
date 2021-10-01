import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'jour5-article',
  template: `
    <div [innerHTML]="html"></div>
    <ul>
      <li *ngFor="let categorie of categories">{{ categorie }}</li>
    </ul>
  `
})
export class ArticleComponent implements OnInit {
  public html : string = "";
  public categories : Array<string> = [];
  constructor( public http : HttpClient) { }

  public getCategories() {
    return this.http.get("http://localhost:3000/categories");
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/articles").subscribe( 
      (x : any) => {
        this.html = x.map( ( article :any ) => {
          return `
            <h3>${article.titre}</h3>
            <p>${article.contenu}</p>
            <hr>
          `
        }).join("") // [ , , ] => ""
       }
    )
  this.getCategories().subscribe( (data : any ) => {
    this.categories = data 
  })

  }

}
