// 10-class.ts

// dans la version 6 de javascript il est possible de créer des class en utilisant le mot clé class 

// avant version 6 de js 

// fonction constructrice
function Etudiant(nom , age){
    this.nom = nom;
    this.age = age ;
}
// ajouter des méthodes à notre fonction constructrice
Etudiant.prototype.saluation = function(){
    console.log(`Bonjour ${this.nom} `);
}
Etudiant.prototype.description = function(){
    console.log(`${this.nom} a ${this.age}`);
}
// ajouter des propriétés et méthodes statiques
Etudiant.formation = "Formation 3WAcademy"; // propriété
Etudiant.information = function(){
    console.log("je suis un étudiant")
}
const e = new Etudiant("Alain" , 12);
console.log(e); 
e.saluation();
console.log(Etudiant.formation);

// tsc 10-class.ts && node 10-class.js

// avec l'arrivée de la version 6 de js => class 

class Eleve {
    nom ;
    age ;
    constructor(nom , age){
        this.nom = nom ;
        this.age = age ;
    }
    salutation (){
        console.log(`Bonjour ${this.nom} `);
    }
    description(){
        console.log(`${this.nom} a ${this.age}`);
    }
    static formation = "Formation 3WAcademy";
    static information(){
        console.log("je suis un étudiant")
    }
}
// par rapport aux autres langages orientés objet => ressemble beaucoup plus 
// tsc 10-class.ts && node 10-class.js

const e2 = new Eleve("Charles", 33);
console.log(e2);
e2.description();
Eleve.information();

// typescript vient ajouter des nouveaux concepts (absent de javascript de base )
// public // private // protected 

// class avec la syntaxe typescript 

class Formation {
    public nom :string ;
    private duree : number ;
    protected matieres :Array<string> ;
    
    public constructor(nom :string , duree : number , matieres : Array<string>){
        this.nom = nom ;
        this.duree = duree ;
        this.matieres = matieres;
    }

    genererFiche() :string {
        const resultat = `
            <h1>${this.nom}</h1>
            <p>${this.duree} mois </p>
            <ul>
                ${this.matieres.map( matiere => {
                    return "<li>"+matiere+"</li>\n" ;
                }).join("")}
            </ul>
        `;
        return resultat;
    }
}
const f = new Formation("Formation Angular", 12, ["js", "node", "angular"])
console.log(f.genererFiche());

// class avec la syntaxe typescript 

// créer le fichier 11-exo.ts 
// créer une class Exercice 
// class dispose de 3 propriétés : "titre" , enoncé , point
// titre string // enoncé string , point number 
// toutes ces propriétés sont privées
// méthode print()
// retourner le code suivant 
/* <div>
    <h1>titre</h1>
    <p>enoncé</p>
    <ul>   
        <li>nb point : point ;</li>
        <li>date : 27/09/2021</li>
    </ul>
</div> */

// tester cette class avec les valeurs suivantes :
// "exo 1", "generateur de lorem ipsum" ,  10
// "exo 2", "générer une fonction sur les palydrome" ,  20
