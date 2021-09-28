import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onze',
  template: `
      <h2>faire une boucle via la directive *ngFor</h2>
      <ul>
        <li *ngFor="let j of liste">{{ j }}</li>
      </ul>
      <h2>afficher élément avec des conditions *ngIf</h2>
      <p *ngIf="10 == 10">lorem ipsum</p>

      <div [innerHTML]="texteAvecSautLigne"></div>
      <!-- document.getElementById().innerHTML = "bonjour<br>les amis" 
      rdv 14h06 @ toute suite !!! 
      -->
  `,
  styles: [
  ]
})
export class OnzeComponent implements OnInit {
  public liste : Array<string> = ["lundi" , "mardi" , "mercredi"];
  public test : boolean = false ;
  public texteAvecSautLigne : string = "bonjour<br>les amis";

  public verification() :boolean {
    return 10 <= 2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
