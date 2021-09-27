"use strict";
exports.__esModule = true;
var _14_module_lib_1 = require("./14-module-lib");
// pas besoin de mettre l'extension dans le nom du fichier
console.log((0, _14_module_lib_1.calcul)());
console.log(_14_module_lib_1.a);
var test = new _14_module_lib_1.A(12);
console.log(test);
var test2 = {
    largeur: 30,
    options: [test, test, test]
};
console.log(test2);
// tsc 14-module.ts && node 14-module.js
