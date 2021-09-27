export default class Salutation{
    public data : Array<string> = ["Bonjour","Hello", "Buenos dias" , "باح الخير"];
    
    random() : string{
        const randomNumber = Math.random() * ( this.data.length - 1 );
        const randomIndex = randomNumber.toFixed(0) ;
        return this.data[randomIndex];
    }
}

/**
angular
https://formation.webdevpro.net/angular
login : angular
passwd : google
 */
// créer un nouveau dossier jour1-angular


