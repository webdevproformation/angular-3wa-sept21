// 07-typage-fonction.ts

// déclaration de fonction 
function calcul( largeur: number , unite: string ) :string {
    return `${largeur} ${unite}` ;
}

function division( largeur: number , unite: string ) : void {
    console.log(`${largeur} ${unite}`)  ;
}
// la fonction ne retourne rien void => vide undefined

// expression de fonction 
const multiplication:Function = function( largeur: number , unite: string) :string {
    return `${largeur} ${unite}` ;
}

// arrow function (fonction fléchée)
const soustraction = (a : number , b : number ) :string  => {
    const resultat = a - b ; 
    return `${resultat}`;
}

interface CercleInterface {
    rayon : number ,
    perimetre( unite:number ) : number,
    aire() : number
}

const cercle : CercleInterface = {
    rayon : 12 ,
    perimetre : function( unite ){
        return this.rayon * 2 * Math.PI * unite
    },
    aire : function (){
        return Math.PI * this.rayon ** 2
    }
}

const cercle2 : CercleInterface = {
    rayon : 30,
    perimetre(unite){
        return unite
    },
    aire : function(){
        return 10
    }
}

console.log(cercle2.aire())

// tsc 07-typage-fonction.ts && node 07-typage-fonction.js