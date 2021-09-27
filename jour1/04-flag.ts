// tsc fichier.ts --drapeaux .... 
// https://www.typescriptlang.org/docs/handbook/compiler-options.html

// liste des drapeaux les plus utilisés

// tsc --init => créer un fichier tsconfig.json
// tsc fichier.ts --target es6 --removeComments --strict  --watch

// tsc 04-flag.ts --target es6 --removeComments --strict  --watch

const a = "fichier";
const b = "dossier";

const c = () => {
    return a + b ;
}

const toto = "bonjour les amis";

// pour éviter de saisir des lignes de commande trop longues => tsconfig.json
// tsc 
// commande qui permet de créer le fichier tsconfig.json
// tsc --init
// message TS6071: Successfully created a tsconfig.json file.

// il est possible de modifier le fichier tsconfig.json pas besoin stopper le terminal 
// tsc relancer et utiliser la nouvelle valeur au flag que vous avez modifié

// pause rdv dans 15 min => 11h17 @ toute suite 

// typage / interface 