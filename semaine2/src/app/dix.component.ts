import { Component, OnInit } from '@angular/core';

interface PlanningInterface {
  lundi : Array<string>,
  mardi : Array<string>,
  mercredi : Array<string>
}

@Component({
  selector: 'dix',
  template: `
    <h1>{{ titre }}</h1>
    <p>{{ generateP(5) }}</p>
    <h2>lundi</h2>
    <ul>
        <li>{{ planning.lundi[0]}}</li>
        <li>{{ planning.lundi[1]}}</li>
    </ul>
    <h2>mardi</h2>
    <ul>
        <li>{{ planning.mardi[0]}}</li>
        <li>{{ planning.mardi[1]}}</li>
        <li>{{ planning.mardi[2]}}</li>
    </ul>
    <h2>mercredi</h2>
    <ul>
        <li>{{ planning.mercredi[0]}}</li>
        <li>{{ planning.mercredi[1]}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class DixComponent implements OnInit {
  public titre : string = "titre principale" ;
  public planning : PlanningInterface = { 
      lundi : [ "typescript" , "install angular"],
      mardi : [ "ng generate" , "composant" , "service"],
      mercredi : [ "rxjs" , "animation" ]
  }
  public  p : string = "lorem ipsum" ;

  public generateP(nbRepetition : number) : string {
    let resultat = "";
    for(let i = 0 ; i < nbRepetition ; i++){
      resultat += `${this.p } `;
    }
    return resultat;
  }

  /* public generatePlanning() :string{
    let planning = "";
    for(let jour  in this.planning){
      planning += "<h2>"+jour+"</h2>";
      planning += "<ul>";
      planning += "</ul>";
    }
    return planning ;
  } */

  constructor() { }

  ngOnInit(): void {
  }

}
