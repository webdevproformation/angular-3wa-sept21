// 07-typage-fonction.ts
// déclaration de fonction 
function calcul(largeur, unite) {
    return largeur + " " + unite;
}
function division(largeur, unite) {
    console.log(largeur + " " + unite);
}
// la fonction ne retourne rien void => vide undefined
// expression de fonction 
var multiplication = function (largeur, unite) {
    return largeur + " " + unite;
};
// arrow function (fonction fléchée)
var soustraction = function (a, b) {
    var resultat = a - b;
    return "" + resultat;
};
var cercle = {
    rayon: 12,
    perimetre: function (unite) {
        return this.rayon * 2 * Math.PI * unite;
    },
    aire: function () {
        return Math.PI * Math.pow(this.rayon, 2);
    }
};
var cercle2 = {
    rayon: 30,
    perimetre: function (unite) {
        return unite;
    },
    aire: function () {
        return 10;
    }
};
console.log(cercle2.aire());
// tsc 07-typage-fonction.ts && node 07-typage-fonction.js
