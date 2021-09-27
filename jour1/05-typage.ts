// 05-typage.ts
export {};

// valeur primitive
const a: string = "bonjour"; // typage n'existe pas en javascript => typescript 
const b: number = 12;
const c: boolean = 12 > 10;

// valeur scalaire / complexe stocker plusieurs valeurs
// première syntaxe possible pour les tableaux
const d: Array<number> = [1,2,3];

// deuxième syntaxe possible 
const e: number[] = [1,2,3];

// tableau contenant des valeurs de types différents
// première syntaxe
const f: Array<number|string> = [1,2,3 , "bonjour", "les" , "amis"];

// deuxième syntaxe
const g: (number|string)[] = [1,2,3 , "bonjour", "les" , "amis"];

// objet 
// deux syntaxes possibles => Object type de la variable MAIS décrit pas ce qu'il contient
const h:Object = { nom : "Alain" , age : 12 };

// interface permettre de écrire le contenu d'un objet 
// créer un nouveau type de variable => comme string / number 
// un type complexe
interface iEtudiant {
    nom : string ,
    age ?: number ,
    dtRentree ?: string // cette propriété est optionnelle 
}

const i: iEtudiant = { nom : "Alain" , age : 12 , dtRentree : "12/12/2021" } ;
const k: iEtudiant = { nom : "Béatrice" , age : 12  } ;
const l: iEtudiant = { nom : "Charles"   } ;

// Collection => tableau d'objet tableau d'étudiants

const eleves : Array<iEtudiant> = [
    { nom : "Alain" , age : 12 , dtRentree : "12/12/2021" },
    { nom : "Charles"   }
];

const eleves2 : iEtudiant[] = [
    { nom : "Alain" , age : 12 , dtRentree : "12/12/2021" },
    { nom : "Charles"   }
]

