const tableau = ["lundi", "mardi", "mercredi"] ;

// parcourir chaque élément du tableau et l'afficher dans la console avec un majuscule en 1ère lettre

// for()
// while()

tableau.forEach(  jour  => console.log( `${jour[0].toUpperCase()}${jour.slice( 1 )}` ))

// fonction fléchée 
// template string avec ${}
// transformer ce fichier en .js
// cd jour1
// tsc 03-exo.ts --target es6 --removeComments
// transformer mon fichier ts => js ET exécuté dans nodejs 
// tsc 03-exo.ts --target es6 --removeComments && node 03-exo.js

/**
autre solution possible 
for (let element of tableau){
    console.log(element.charAt(0).toUpperCase()+element.slice( 1 ));
}
 */
// 04-flag.ts