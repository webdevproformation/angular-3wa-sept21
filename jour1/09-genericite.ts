// interface et le typage permettent de garantir que les variables utilisées 
// correspondent parfaitement aux besoins de votre script

// trop rigide 

interface ParamInterface {
    id : number ,
    nom : string
}

function concatener(obj1 : ParamInterface , obj2 : ParamInterface) : Array<ParamInterface>{
    return [obj1 , obj2]
}

const result = concatener({id : 1 , nom : "alain"}, {id : 2 , nom : "Charles"});
console.log(result);

// tsc 09-genericite.ts && node 09-genericite.js
// MAIS trop rigide

interface Param2Interface {
    id : number ,
    nom : string,
    age : number
}

function concatener2(obj1 : Param2Interface , obj2 : Param2Interface) : Array<ParamInterface>{
    return [obj1 , obj2]
}

const result2 = concatener2({id : 1 , nom : "alain" , age : 22}, {id : 2 , nom : "Charles" , age : 23});
console.log(result2);

// la fonction avec <T> juste après son nom  devient générique
// créer une fonction générique 

function concatener3<T> (obj1:T , obj2 :T) : Array<T>{
    return [obj1 , obj2];
}


console.log(concatener3({id: 1}, {id : 2}))
console.log(concatener3({id: 1 , nom : "toto"}, {id : 2, nom : "toto"}))
console.log(concatener3({id: 1 , nom : "toto" , age : 12}, {id : 2, nom : "toto" , age : 24}))


const o1 = {
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
  };
let o2 = {
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
  };


  console.log(concatener3(o1, o2))

  // class / module / decorateur 
  // 14h09 !!bon appétit !!! 