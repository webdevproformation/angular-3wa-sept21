(function(){
    class Proprietaire{
        constructor(public id : number , public nom : string){}
    }
    class Instrument{
        constructor(public poids : string , public marque : string , public prix : number){}
    }
    class Piano extends Instrument{
        constructor(
                public poids : string , 
                public marque : string , 
                public prix : number,
                public proprietaire : Proprietaire
        ){
            super(poids , marque , prix)
        }
    }
    
    const p = new Piano("12kg", "super piano",1000 , {id : 1 , nom : "Alain"});
    
    console.log(p);
    // tsc 13-exo.ts && node 13-exo.js // rdv 16h18 pour la suite en fin de typescript => angular
})()

// 14-module.ts
// 14-module-lib.ts
