import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'obs1',
  template: `
    <h3>Obs 1</h3>
    <p>{{ nombre }}</p>
  `
})
export class Obs1Component implements OnInit {
  public nombre : string | null = "";
  constructor( ) { }
  ngOnInit(): void {
    const $obs1 = new Observable( ( observer ) => { 
      observer.next(1);
      observer.next(2);
      // observer.complete(); // stopper le flux d'envoie des données depuis la source de données 
      observer.next(3);
      // fonction qui est exécutée suite à un complete // ou à une désinscription à l'observable
      return () => { 
        console.log("fin")
      }
    } )
    // abonnement 
    const abonnementObs1 = $obs1.subscribe( ( chiffre  ) => { 
      this.nombre += ` - ${chiffre}`;
    } )

    // désabonnement 
    abonnementObs1.unsubscribe(); // supprimer l'abonnement à la source de données 
    // supprimer l'abonnement permet de libéré la RAM pour écouter les envois de données 
  }

}
