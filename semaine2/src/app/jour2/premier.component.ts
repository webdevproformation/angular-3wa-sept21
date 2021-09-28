import { Component } from "@angular/core";

@Component({
    selector:"Premier",
    template : "<h1>je suis le premier composant Angular - modification</h1>"
}) // décorer la class Premier qui est exportée
export class PremierComponent{}

// je veux créer le composant premier :

// fichier minuscule premier.composant.ts
// class PascalCase + Component => PremierComponent
// selector => libre de l'appeler comme tu veux minucule / majuscule / n'importe quelle règle de ton choix 

// je veux créer le composant sidebare-top 
// fichier minuscule sidebare-top.composant.ts
// class PascalCase + Component => SidebareTopComponent
// selector => libre de l'appeler comme tu veux minucule / majuscule / n'importe quelle règle de ton choix 