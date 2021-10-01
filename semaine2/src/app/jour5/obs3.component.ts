import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs"

interface Article {
  id : number , 
  titre : string , 
  contenu : string
}

@Component({
  selector: 'obs3',
  template: `
    <h3>Exo</h3>
    <div [innerHTML]="html"></div>
  `
})
export class Obs3Component implements OnInit {
  public html : string = "";
  public getArticles() : Observable<Article>{
    return new Observable( (observer) => {
      observer.next({ id : 1 , titre : "article 1" , contenu : "lorem ipsum"})
      observer.next({ id : 2 , titre : "article 2" , contenu : "lorem ipsum"})
      observer.next({ id : 3 , titre : "article 3" , contenu : "lorem ipsum"})
    })
  }
  ngOnInit(): void {
    this.getArticles().subscribe( (article : Article ) => {
      this.html += `
      <article>
          <h3>${ article.titre } </h3>
          <p>${ article.contenu } </p>
      </article>
      `
    } )
  }
  constructor() { }
 
 

}
