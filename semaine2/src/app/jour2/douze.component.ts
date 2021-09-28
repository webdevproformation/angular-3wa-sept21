import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'douze',
  template: `
  <!--  *ngFor="" *ngIf="" 
    attribut classique du DOM document.getElementById()
    [innerHTML]=""
    [style]=
  -->  
  <p [style]="bold()">un texte</p>
  <img [src]="url" alt="">
  <!-- directive d'action si je clique sur un élément => changer la couleur de fond de l'élément -->
  <button (click)="modifBouton()">action</button>
  <button (click)="modifP()">action 2</button>
  <p>{{ contenuP }}</p>
  <button (click)="modifH2(titre)">action 3</button>
  <!-- directive référence à une balise -->
  <h2 #titre></h2>
  <button (click)="modifImg($event)">action 4</button>
  <img src="" alt="">
  `,
  styles: [
  ]
})
export class DouzeComponent implements OnInit {
  public url : string = "http://via.placeholder.com/200x100";
  public bold() :string{
    return "font-weight:bold;color:red"
  }
  public modifBouton() :void{
    alert("je suis cliqué")
  }
  // troisième manière passer l'événement qui est déclenché lors du click 
  // et target => rechercher dans le DOM 
  public modifImg($event : MouseEvent) : void {
    const bouton : any = $event.target;
    bouton.nextElementSibling.src="http://via.placeholder.com/200x100";
  }

  // deuxième manière de faire 
  // ajouté dans la balise que vous voulez modifier une référence et passer le nom de la référence comme argument de la fonction à exécuter 
  public modifH2(elementAModifier : HTMLHeadingElement) :void {
    elementAModifier.innerHTML = "je viens de cliquer sur action 3";
  }

  // première manière 
  public contenuP : string = ""; // si une propriété est modifié dans la class => automatiquement mettre à jour la vue
  public modifP(){
    // modifier la valeur d'une propriété de la class => automatiquement mettre à jour la vue
    this.contenuP = "je viens de cliquer sur action 2";
  }



  constructor() { }

  ngOnInit(): void {
  }

}
