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
];

// créer le fichier 06-exo.ts 
// pouvez vous typer les variables suivantes :
// ce fichier va contenir plusieurs variables
// veuillez les typer les 5 variables suivantes correctement :

// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
/* liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};*/
/* liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];*/







