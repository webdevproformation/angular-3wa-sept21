import { Component, OnInit } from '@angular/core';
import { CommentaireInterface } from './commentaire.interface';

@Component({
  selector: 'jour3-article',
  template: `
    <article>
      <h2>{{titre}}</h2>
      <p>{{contenu}}</p>
      <like [data]="like" (augmenter)="augmenterLike($event)"></like>
      <instagram [instagram]="instagram" (actionDiminuer)="diminuer()" (actionAugmenter)="augmenter()"></instagram>
      <div *ngFor="let commentaire of commentaires">
        <commentaire [commentaire]="commentaire"></commentaire>
      </div>
    </article>
  `,
  styles: [
  ]
})
export class ArticleComponent implements OnInit {

  public diminuer(){
    this.instagram--;
  }

  public augmenter(){
    this.instagram++;
  }

  public augmenterLike( $event :number ){
    this.like++;
  }

  public instagram : number = 0 ;

  public titre : string = "premier article";
  public contenu : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis lorem vitae suscipit consectetur. Nam dapibus quis massa id dictum. Cras non odio eget augue lobortis laoreet ut ac risus. Nulla luctus, magna vitae pellentesque euismod, dolor tortor vehicula eros, ut tempor est turpis quis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at tortor at nunc gravida eleifend. Phasellus semper venenatis elit, in euismod tellus scelerisque a. Pellentesque vel felis sed metus bibendum porta."
  public like : number = 30 ; 

  public commentaires : Array<CommentaireInterface> = [
    {
      "_id": "61542301fca42d2844ee1243",
      "email": "toto@yahoo.fr",
      "text": "dolor nisi occaecat irure anim anim cillum cupidatat deserunt amet elit cillum ad ullamco voluptate sunt consequat eu occaecat sit"
    },
    {
      "_id": "61542301a08e049b304cc47d",
      "email": "latishawilliams@gadtron.com",
      "text": "in mollit eu consequat do minim dolore quis sint occaecat eiusmod voluptate deserunt nostrud ipsum officia fugiat commodo ad pariatur"
    },
    {
      "_id": "61542301118398f395f66c79",
      "email": "latishawilliams@gadtron.com",
      "text": "aliquip excepteur adipisicing irure labore enim fugiat id laborum exercitation minim laboris pariatur tempor anim id proident eiusmod excepteur sunt"
    },
    {
      "_id": "6154230196aa4be96e2ee420",
      "email": "latishawilliams@gadtron.com",
      "text": "incididunt eiusmod do excepteur consequat ex Lorem dolore ea in velit ad reprehenderit dolore laborum non eu veniam nostrud deserunt"
    },
    {
      "_id": "6154230151add3b4e2b3e9e7",
      "email": "latishawilliams@gadtron.com",
      "text": "tempor consectetur sint ad labore culpa anim mollit commodo est anim nulla ipsum elit fugiat exercitation elit veniam aute laboris"
    },
    {
      "_id": "615423018adb9ff6b17d66a1",
      "email": "latishawilliams@gadtron.com",
      "text": "sunt voluptate eiusmod deserunt et enim esse incididunt amet fugiat et pariatur nostrud ullamco duis esse Lorem aliqua proident aliquip"
    },
    {
      "_id": "61542301086e783641ddc0c1",
      "email": "latishawilliams@gadtron.com",
      "text": "aliqua consectetur pariatur est in Lorem ipsum aute occaecat deserunt aliqua ipsum anim labore consectetur est et mollit cupidatat anim"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
