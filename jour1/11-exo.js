var Exercice = /** @class */ (function () {
    function Exercice(titre, enonce, point) {
        this.titre = titre;
        this.enonce = enonce;
        this.point = point;
    }
    Exercice.prototype.aujourdhui = function () {
        var dt = new Date();
        return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    };
    Exercice.prototype.print = function () {
        return "<div>\n        <h1>" + this.titre + "</h1>\n            <p>" + this.enonce + "</p>\n            <ul>   \n                <li>nb point : " + this.point + " ;</li>\n                <li>date : " + this.aujourdhui() + "</li>\n            </ul>\n        </div>";
    };
    return Exercice;
}());
var e1 = new Exercice("exo 1", "generateur de lorem ipsum", 10);
var e2 = new Exercice("exo 2", "générer une fonction sur les palydrome", 20);
console.log(e1.print(), e2.print());
// tsc 11-exo.ts && node 11-exo.js
