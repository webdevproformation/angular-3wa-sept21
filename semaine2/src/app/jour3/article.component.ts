import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jour3-article',
  template: `
    <article>
      <h2>{{titre}}</h2>
      <p>{{contenu}}</p>
      <like [data]="like"></like>
    </article>
  `,
  styles: [
  ]
})
export class ArticleComponent implements OnInit {
  public titre : string = "premier article";
  public contenu : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis lorem vitae suscipit consectetur. Nam dapibus quis massa id dictum. Cras non odio eget augue lobortis laoreet ut ac risus. Nulla luctus, magna vitae pellentesque euismod, dolor tortor vehicula eros, ut tempor est turpis quis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at tortor at nunc gravida eleifend. Phasellus semper venenatis elit, in euismod tellus scelerisque a. Pellentesque vel felis sed metus bibendum porta."
  public like : number = 30 ; 

  constructor() { }

  ngOnInit(): void {
  }

}
