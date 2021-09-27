// 02-hello.ts

let salutation = {
    fr : "bonjour",
    en : "hello",
    es : "hola"
};

console.log(`${salutation.en}`);

// écrire du js en utilisant des nouvelles syntaxes ES6 (version 6 de javascript ajoutée en 2015)
// let 
// `` template string
// transformer le fichier 02-hello.ts => 02-hello.js
// cd jour1 
// clear
// tsc 02-hello.ts => 
// transpiler le fichier 02-hello.ts en 02-hello.js

// compacter un minimum le code
//utiliser une vieille syntaxe ES3 (le plus de compatibilité)
// let => var 
// template string pour la concaténation => "" et +

// tsc 02-hello.ts --target es6
// tsc 02-hello.ts --target es6 --removeComments


// questions ?? 
/**
 * créer le fichier 03-exo.ts 
 * 
 * Ce fichier contient une variable de type tableau = ["lundi", "mardi", "mercredi"]

créer un script qui va parcourir tous les éléments et mettre la première lettre du mot en majuscule

Lundi
Mardi
Mercredi

compiler fichier ts en js en version es6 sans afficher les commentaires 
 */
