/*
rappel de typescript 

Typescript => langage spécialisé qui est un SUR ENSEMBLE de javascript (SUPERSET)

dès que vous écrivez du javascript valide => écrire du Typescript valide 

Typescript langage qui connait TOUS les concepts / les mots clés de javascript 

Typescript va ajouter des concepts en + qui sont absents de javascript 

=> Typage 
=> le typage concept qui n'existe pas en js de base 
=> qui est un ajout de Typescript 
=> javacript est un langage à typage faible ou dynamique 

*/

let a = 20 ; // automatiquement javascript affecté un type number à la variable a 
a = "bonjour" ; // changer le type de la variable a => passer à string 

// vous allez avoir une vérification des types de chaque variable

// pour écrire du typescript => .ts 
// attention ces fichiers ne sont pas comprises directement par les compilateurs dans les navigateurs web / nodejs 
// il va falloir transformer .ts => .js 
// transformer d'un langage vers un autre langage ts => js (compiler // transpiler)

// cette compilation est réalisé via un logiciel en ligne de commande => récupérer depuis npmjs.com
// https://www.npmjs.com/package/typescript

// pour le télécharger et l'installer sur votre ordinateur le compilateur
// nodejs // npm => Node Package Manager
// npm install --global typescript
// npm i -g typescript

// installer la version typescript@4.4.3

// dans votre terminal => ajouté une nouvelle commmande => tsc
// tsc = typescript compilateur 
// tsc --version 
// Version 4.4.3

// 02-hello.ts
