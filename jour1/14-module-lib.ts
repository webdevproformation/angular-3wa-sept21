export const a :number = 1234 ;

export function calcul () :number {
    return 2 ;
}

export function division () : number{
    return 30 ;
}

export class A {
    constructor(public id : number){}
 }

export interface AInterface {
    largeur : number,
    options : Array<A>
}

// pour pouvoir utiliser les fonctions / class / variables / interface dans un autre fichier .ts
// ajouter devant sa déclaration le mot clé export 