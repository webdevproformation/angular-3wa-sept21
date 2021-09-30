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
    static validPassword (control : AbstractControl) : ValidationErrors | null{
        const pattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\?\-!]).{8,}$/;
        if(!pattern.test(control.value)){
            return {
                message : "le password est invalide"
            }
        }
        return null;
    }
    static validService(control : AbstractControl) : Promise< ValidationErrors | null > {
        return new Promise( (resolve , reject ) => { 
            const services : Array<string> = ["web" , "commercial" , "administratif"];
            setTimeout( () => {
                if(!services.includes(control.value)){
                    resolve({
                        message : "le service mentionné n'existe pas ..."
                    })
                } else {
                    resolve( null )
                }
            } , 1000)
        } )
    }
}
