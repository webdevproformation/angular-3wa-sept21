import { Component, OnInit , Input } from '@angular/core';
import { CommentaireInterface } from './commentaire.interface';

@Component({
  selector: 'commentaire',
  template: `
    <h3 class="text-warning fs-5">{{commentaire.email}} a dit</h3>
    <p>{{commentaire.text}}</p>
  `,
  styles: [
  ]
})
export class CommentaireComponent implements OnInit {
  
  @Input() commentaire : CommentaireInterface = {_id : "", email : "" , text: ""}

  constructor() { }

  ngOnInit(): void {
  }

}
