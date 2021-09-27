// 12-class-suite.ts

class A{
    private prop1 : string;
    public prop2 : Array<number> 

    constructor(prop1 : string , prop2 : Array<number>){
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

// au lieu d'avoir à créer les propriétés + initialiser les valeurs de propriétés
// astuce de typescript pour créer des class rapidement
class B{
    constructor ( private prop1 : string , public prop2 : Array<number>  ){}
}

const a = new A("bonjour" , [1,2,3]);
const b = new B("bonjour" , [1,2,3]);

console.log(a, b);
// tsc 12-class-suite.ts && node 12-class-suite.js

// class peuvent être utilisée comme des interfaces pour typer des variables

class Voiture{
    constructor(public marque : string , public dtAchat : string ){}
}

const v : Voiture = {
    marque : "Renault",
    dtAchat : "12/12/2021"
}

// héritage d'une class Forme vers une class Triangle extends 

class Forme{
    constructor(public couleur : string , public nbCote : number) {}
}
class Triangle extends Forme{

}
const t = new Triangle("#000", 3);
console.log(t);

// héritage + surcharge de la méthode constructrice du parent Forme
class Carre extends Forme{
    constructor(public couleur : string , public nbCote : number , public largeur : number) {
        super(couleur , nbCote);
    }
}
const c = new Carre("#1234", 4 , 20);
console.log(c);
