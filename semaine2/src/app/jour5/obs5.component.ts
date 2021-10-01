import { Component, OnInit } from '@angular/core';
import { from , of } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: 'obs5',
  template: `
    <p>
      obs5 works!
    </p>
  `
})
export class Obs5Component implements OnInit {
  public getData(){
    // map ( )
    // récupérer chaque élément de l'observable 
    // d'enrichir sa valeur / transformer la valeur 
    // rdv dans 15 min =>  16h18 @ toute suite  
    return from([1,2,3]).pipe( 
        map( ( x ) => { return x * 2 } ) ,
        map( ( x ) => { return "valeur " + x } )
      );
  }
  public getData2(){
    return of([1,2,3]).pipe( map( ( x ) => { return x.map( x => x * 2 ) } ) );
  }
  constructor() { }
  ngOnInit(): void {
    this.getData().subscribe( (donnee) => {
      console.log(donnee)
    })
    this.getData2().subscribe( (donnee) => {
      console.log(donnee)
    })
  }

}
