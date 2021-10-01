import { Component, OnInit } from '@angular/core';
import { concat, from, merge, Observable, of } from "rxjs";
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

  public fusion (){
    const source1 = of([1,2,3]);
    const source2 = of([3,4,5]);
    return concat(source1 , source2)
  }

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
    this.fusion().subscribe( x  => {
      console.log(x);
    })

    this.getArticles()
        .pipe( map ( (x) => Object.assign({} , x, {dte : "01/10/2021"}) ) )
        .subscribe( x => { 
          this.html += `<li> ${x.titre} - ${x.dte} </li>`
        } )
  }

}
