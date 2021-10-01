import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';

@Component({
  selector: 'obs2',
  template: `
    <h3>Obs 2</h3>
    <p>{{ texte }}</p>
  `
})
export class Obs2Component implements OnInit {
  public texte : string = "";
  constructor() { }

  ngOnInit(): void {
    const abonnement = this.data().subscribe( data => {
      this.texte += ` ${data} `;
    } )
    abonnement.unsubscribe(); 
  }

  public data(){
    return new Observable( (observer) => {
      observer.next("a");
      observer.next("b");
      observer.next("c");
    } )
  }

}
