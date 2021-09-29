
// fonction js classique 
function calcul ( largeur , hauteur  ){
    return largeur + hauteur
}

// fonction ts avec typage 
function calcul2 ( largeur : number , hauteur : number  ) :number{
    return largeur + hauteur ;
}

calcul2(2,3)
/* calcul2("a","b") */
// fonction générique 
function calcul3<T> ( largeur : T , hauteur : T  ) : Array<T> {
    return [largeur , hauteur] ;
}

// deux manières de l'exécuter 
// courte 
calcul3(2,3) // exécuter la fonction de manière courte 
calcul3("2","3")
calcul3({},{})
calcul3({id : 1, titre : "", niveau : 1}, {id : 1, titre : "", niveau : 1})

interface Exo {
    id : number,
    titre : string ,
    niveau : number
}

// longue
calcul3<number>(2,3); // exécuter la fonction longue et explicite 
calcul3<Exo>({id : 1, titre : "", niveau : 1}, {id : 1, titre : "", niveau : 1})

// pas de cohérence entre type annoncé lors de l'appel et les arguments utilisés
// calcul3<string>(2,3); // lever une erreur 


function calcul4 (rayon : number , unite :string ) : string{
    return "";
}


function calcul5<T,R> (rayon : T , unite :R ) : R{
   return unite ;
}

calcul5<number, string>(10, "cm");
calcul5<Array<number>, string>( [10,12, 13] , "cm");


// class classique en typescript 

class A{
    constructor( public prop1 : number , public prop2 : number ){ }
}

const a = new A(12,12)
// const a1 = new A("12","12")

class B<T>{
    constructor( public prop1 : T , public prop2 : T ){ }
}

// exécuter la class en version courte
const b = new B(12,12);
const b1 = new B("12","12");
const b2 = new B([],[]);
const b2_prim = new B({id : 1, titre : "", niveau : 1}, {id : 1, titre : "", niveau : 1});

// exécuter la class B en version longue
const b3 = new B<string>("azerty" , "qwerty")
const b4 = new B<Exo>({id : 1, titre : "", niveau : 1}, {id : 1, titre : "", niveau : 1})

class Produit<T,P> {
    constructor(public stock : T , public description : P ){}
}

//version courte 
const p = new Produit(12, "super produit");
const p_prim = new Produit(12, {id : 1, titre : "", niveau : 1});

// version longue
const p1 = new Produit<number, string>(12, "super produit");
const p2 = new Produit<number, Exo>(12, {id : 1, titre : "", niveau : 1});
