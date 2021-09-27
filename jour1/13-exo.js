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
(function () {
    var Proprietaire = /** @class */ (function () {
        function Proprietaire(id, nom) {
            this.id = id;
            this.nom = nom;
        }
        return Proprietaire;
    }());
    var Instrument = /** @class */ (function () {
        function Instrument(poids, marque, prix) {
            this.poids = poids;
            this.marque = marque;
            this.prix = prix;
        }
        return Instrument;
    }());
    var Piano = /** @class */ (function (_super) {
        __extends(Piano, _super);
        function Piano(poids, marque, prix, proprietaire) {
            var _this = _super.call(this, poids, marque, prix) || this;
            _this.poids = poids;
            _this.marque = marque;
            _this.prix = prix;
            _this.proprietaire = proprietaire;
            return _this;
        }
        return Piano;
    }(Instrument));
    var p = new Piano("12kg", "super piano", 1000, { id: 1, nom: "Alain" });
    console.log(p);
    // tsc 13-exo.ts && node 13-exo.js // rdv 16h18 pour la suite en fin de typescript => angular
})();
