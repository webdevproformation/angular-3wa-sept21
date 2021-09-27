// 10-class.ts
// dans la version 6 de javascript il est possible de créer des class en utilisant le mot clé class 
// avant version 6 de js 
// fonction constructrice
function Etudiant(nom, age) {
    this.nom = nom;
    this.age = age;
}
// ajouter des méthodes à notre fonction constructrice
Etudiant.prototype.saluation = function () {
    console.log("Bonjour " + this.nom + " ");
};
Etudiant.prototype.description = function () {
    console.log(this.nom + " a " + this.age);
};
// ajouter des propriétés et méthodes statiques
Etudiant.formation = "Formation 3WAcademy"; // propriété
Etudiant.information = function () {
    console.log("je suis un étudiant");
};
var e = new Etudiant("Alain", 12);
console.log(e);
e.saluation();
console.log(Etudiant.formation);
// tsc 10-class.ts && node 10-class.js
// avec l'arrivée de la version 6 de js => class 
var Eleve = /** @class */ (function () {
    function Eleve(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    Eleve.prototype.salutation = function () {
        console.log("Bonjour " + this.nom + " ");
    };
    Eleve.prototype.description = function () {
        console.log(this.nom + " a " + this.age);
    };
    Eleve.information = function () {
        console.log("je suis un étudiant");
    };
    Eleve.formation = "Formation 3WAcademy";
    return Eleve;
}());
// par rapport aux autres langages orientés objet => ressemble beaucoup plus 
// tsc 10-class.ts && node 10-class.js
var e2 = new Eleve("Charles", 33);
console.log(e2);
e2.description();
Eleve.information();
// typescript vient ajouter des nouveaux concepts (absent de javascript de base )
// public // private // protected 
// class avec la syntaxe typescript 
var Formation = /** @class */ (function () {
    function Formation(nom, duree, matieres) {
        this.nom = nom;
        this.duree = duree;
        this.matieres = matieres;
    }
    Formation.prototype.genererFiche = function () {
        var resultat = "\n            <h1>" + this.nom + "</h1>\n            <p>" + this.duree + " mois </p>\n            <ul>\n                " + this.matieres.map(function (matiere) {
            return "<li>" + matiere + "</li>\n";
        }).join("") + "\n            </ul>\n        ";
        return resultat;
    };
    return Formation;
}());
var f = new Formation("Formation Angular", 12, ["js", "node", "angular"]);
console.log(f.genererFiche());
// class avec la syntaxe typescript 
