import { Component, OnInit } from '@angular/core';
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'obs6',
  template: `
      <ul [innerHTML]="html"></ul>
  `,
  styles: [
  ]
})
export class Obs6Component implements OnInit {

  public getArticles() : Observable<{id : number , titre : string , contenu : string}>{
    const data = [
      { id : 1 , titre : "article 1" , contenu : "lorem ipsum"},
      { id : 2 , titre : "article 2" , contenu : "lorem ipsum"},
      { id : 3 , titre : "article 3" , contenu : "lorem ipsum"}
    ]
    return from (data) ;
  }
  public html : string = "";
  constructor() { }
  ngOnInit(): void {
    this.getArticles()
        .pipe( map ( (x) => { return Object.assign({} , x, {dte : "01/10/2021"}) }) )
        .subscribe( x => { 
          this.html += `<li> ${x.titre} - ${x.dte} </li>`
        } )

  }

}
