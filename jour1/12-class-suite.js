// 12-class-suite.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    return A;
}());
// au lieu d'avoir à créer les propriétés + initialiser les valeurs de propriétés
// astuce de typescript pour créer des class rapidement
var B = /** @class */ (function () {
    function B(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    return B;
}());
var a = new A("bonjour", [1, 2, 3]);
var b = new B("bonjour", [1, 2, 3]);
console.log(a, b);
// tsc 12-class-suite.ts && node 12-class-suite.js
// class peuvent être utilisée comme des interfaces pour typer des variables
var Voiture = /** @class */ (function () {
    function Voiture(marque, dtAchat) {
        this.marque = marque;
        this.dtAchat = dtAchat;
    }
    return Voiture;
}());
var v = {
    marque: "Renault",
    dtAchat: "12/12/2021"
};
// héritage d'une class Forme vers une class Triangle extends 
var Forme = /** @class */ (function () {
    function Forme(couleur, nbCote) {
        this.couleur = couleur;
        this.nbCote = nbCote;
    }
    return Forme;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Triangle;
}(Forme));
var t = new Triangle("#000", 3);
console.log(t);
var Carre = /** @class */ (function (_super) {
    __extends(Carre, _super);
    function Carre(couleur, nbCote, largeur) {
        var _this = _super.call(this, couleur, nbCote) || this;
        _this.couleur = couleur;
        _this.nbCote = nbCote;
        _this.largeur = largeur;
        return _this;
    }
    return Carre;
}(Forme));
var c = new Carre("#1234", 4, 20);
console.log(c);
