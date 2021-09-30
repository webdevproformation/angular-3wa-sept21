// créer notre propre validateur 

// adresse 
// 22 texte texte 75000 ville 

// chiffre 2 chiffres
// espace
// rue 
// espace
// cp chiffre 5 caractères
// espace 
// ville 

import { AbstractControl , ValidationErrors} from "@angular/forms";

export class addressValidator{
    static validAddress (control : AbstractControl) : ValidationErrors | null{
        const pattern: RegExp = /^[0-9]{2} [a-zA-Z ]+ [0-9]{5} [a-zA-Z ]+$/;
        if(!pattern.test(control.value)){
            return {
                validAddress : false,
                message : "l'adresse saisie est invalide"
            }
        }
        return null;
    }
    static unique(control : AbstractControl) : Promise< ValidationErrors | null > {
        return new Promise( (resolve , reject ) => { 
            setTimeout( () => {
                if(control.value === "admin"){
                    resolve({
                        message : "l'identifiant saisit est déjà utilisé"
                    })
                } else {
                    resolve( null )
                }
            } , 3000)
        } )
    }
}
