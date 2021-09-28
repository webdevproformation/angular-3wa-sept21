import { Component } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
    selector:"Premier",
    template : `<h1>je suis le premier composant Angular - modification</h1>
        <hr>
        <h2>{{data.nom}}</h2>
        <p>prix : {{data.prix}}</p>
        <p>prix : {{dataService.get(1)[0].prix}}</p>
    `
}) // décorer la class Premier qui est exportée
export class PremierComponent{

    public data ;
    constructor(public dataService : DataService){ // injection de dépendance 
       this.data = dataService.get(1)[0];
       console.log(this.data);
    }
}

// je veux créer le composant premier :

// fichier minuscule premier.composant.ts
// class PascalCase + Component => PremierComponent
// selector => libre de l'appeler comme tu veux minucule / majuscule / n'importe quelle règle de ton choix 

// je veux créer le composant sidebare-top 
// fichier minuscule sidebare-top.composant.ts
// class PascalCase + Component => SidebareTopComponent
// selector => libre de l'appeler comme tu veux minucule / majuscule / n'importe quelle règle de ton choix 