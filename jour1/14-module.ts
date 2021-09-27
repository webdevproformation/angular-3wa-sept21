import {a , A , calcul , AInterface} from "./14-module-lib";
// pas besoin de mettre l'extension dans le nom du fichier
console.log(calcul());
console.log(a);
const test = new A(12)
console.log(test);
const test2 :AInterface = {
    largeur : 30 ,
    options : [test , test, test]
}
console.log(test2);

// tsc 14-module.ts && node 14-module.js