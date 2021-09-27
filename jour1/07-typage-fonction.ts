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

// xml => json => requete ajax => ts vérifier via une interface 

// https://www.json-generator.com/

// créer le fichier 08-exo.ts 
// ce fichier contient la variable suivante :
// typer la variable json

/**
const json = [
  {
    "_id": "61519cb5eed36d60c8d7278b",
    "index": 0,
    "guid": "f6523191-8fcf-4297-a5fb-2124f9d70f72",
    "isActive": false,
    "balance": "$3,064.45",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "blue",
    "name": "Candice Boone",
    "gender": "female",
    "company": "ARCHITAX",
    "email": "candiceboone@architax.com",
    "phone": "+1 (929) 560-3551",
    "address": "142 Hyman Court, Tibbie, Michigan, 9508",
    "registered": "2019-04-28T06:33:44 -02:00",
    "tags": [
      "elit",
      "ex",
      "ut",
      "ullamco",
      "dolore",
      "minim",
      "proident"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Gwen Powers"
      },
      {
        "id": 1,
        "name": "Carver Wong"
      },
      {
        "id": 2,
        "name": "Gonzales Sexton"
      }
    ]
  },
  {
    "_id": "61519cb53c483ccb007f0cdd",
    "index": 1,
    "guid": "ea52612b-8da1-42fb-9835-bd3c43dfeaa5",
    "isActive": true,
    "balance": "$3,776.90",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "green",
    "name": "Potter Wolfe",
    "gender": "male",
    "company": "GYNKO",
    "email": "potterwolfe@gynko.com",
    "phone": "+1 (923) 526-3437",
    "address": "211 Schenck Avenue, Lodoga, Florida, 3286",
    "registered": "2016-03-15T03:26:19 -01:00",
    "tags": [
      "laborum",
      "sint",
      "nostrud",
      "consectetur",
      "Lorem",
      "do",
      "esse"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Elena Burke"
      },
      {
        "id": 1,
        "name": "Lidia Juarez"
      },
      {
        "id": 2,
        "name": "Trudy Bradley"
      }
    ]
  },
  {
    "_id": "61519cb512c0da86b1ecbef3",
    "index": 2,
    "guid": "b7b0bc2d-be40-4d1a-8c14-7a6c5c04ac5f",
    "isActive": false,
    "balance": "$2,639.83",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": "Allyson Hansen",
    "gender": "female",
    "company": "CEMENTION",
    "email": "allysonhansen@cemention.com",
    "phone": "+1 (983) 454-2209",
    "address": "275 Ridgewood Avenue, Delco, Guam, 1733",
    "registered": "2019-05-24T03:23:37 -02:00",
    "tags": [
      "officia",
      "magna",
      "eu",
      "veniam",
      "exercitation",
      "in",
      "culpa"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Rochelle Webb"
      },
      {
        "id": 1,
        "name": "Kathy Aguilar"
      },
      {
        "id": 2,
        "name": "Tanisha Poole"
      }
    ]
  },
  {
    "_id": "61519cb5be5ebedbf0ecdb53",
    "index": 3,
    "guid": "52234254-bb77-4a5e-aa92-ba39e9713850",
    "isActive": true,
    "balance": "$1,251.35",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Bruce Baxter",
    "gender": "male",
    "company": "ULTRASURE",
    "email": "brucebaxter@ultrasure.com",
    "phone": "+1 (890) 412-2867",
    "address": "298 Dean Street, Elbert, Arizona, 1846",
    "registered": "2019-03-12T12:08:39 -01:00",
    "tags": [
      "elit",
      "incididunt",
      "eiusmod",
      "nostrud",
      "veniam",
      "laborum",
      "cillum"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mildred Potter"
      },
      {
        "id": 1,
        "name": "Michael Wood"
      },
      {
        "id": 2,
        "name": "Ellis Washington"
      }
    ]
  },
  {
    "_id": "61519cb50e8d870a704a23e2",
    "index": 4,
    "guid": "4749dc60-2d25-403a-bc27-4ca5ad7b098c",
    "isActive": true,
    "balance": "$2,812.21",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Griffin Grimes",
    "gender": "male",
    "company": "GEEKETRON",
    "email": "griffingrimes@geeketron.com",
    "phone": "+1 (829) 428-3621",
    "address": "511 Fane Court, Balm, Oregon, 4913",
    "registered": "2014-03-25T06:10:35 -01:00",
    "tags": [
      "aliqua",
      "exercitation",
      "sit",
      "ex",
      "veniam",
      "esse",
      "enim"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Smith Avery"
      },
      {
        "id": 1,
        "name": "Donna Solis"
      },
      {
        "id": 2,
        "name": "Merrill Gillespie"
      }
    ]
  }
]
 */

