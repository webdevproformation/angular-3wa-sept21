import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'jour5-article',
  template: `
    <div [innerHTML]="html"></div>
  `
})
export class ArticleComponent implements OnInit {
  public html : string = ""
  constructor( public http : HttpClient) { }
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
  }

}
