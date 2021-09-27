const liste1: string = "pêche poire ananas"; 
// const liste1 : any = "pêche poire ananas"; // par défaut typescript 


const liste2 : Array<string> = ["pêche" , "poire", "ananas"];
//const liste2 : string[] = ["pêche" , "poire", "ananas"];

//const liste3: Array<string|number> = ["pêche", 4, "poire", 3, "ananas" , 2];
const liste3: (string|number)[] = ["pêche", 4, "poire", 3, "ananas" , 2];

const liste4:Object = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

interface CourseInterface { // Première lettre en majuscule PascalCase 
    items : Array<string|number>,
    budget : number , 
    unite : string
}

const liste4_v2:CourseInterface = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};



const liste5:Array<Object> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

const liste5_v2:Array<{}> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

const liste5_v3:Array<{id:number , nom : string , quantite : number}> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

interface Achat {
    id:number , 
    nom : string , 
    quantite : number
}

const liste5_v4:Array<Achat> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];