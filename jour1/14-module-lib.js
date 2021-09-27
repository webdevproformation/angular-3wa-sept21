"use strict";
exports.__esModule = true;
exports.A = exports.division = exports.calcul = exports.a = void 0;
exports.a = 1234;
function calcul() {
    return 2;
}
exports.calcul = calcul;
function division() {
    return 30;
}
exports.division = division;
var A = /** @class */ (function () {
    function A(id) {
        this.id = id;
    }
    return A;
}());
exports.A = A;
// pour pouvoir utiliser les fonctions / class / variables / interface dans un autre fichier .ts
// ajouter devant sa déclaration le mot clé export 
