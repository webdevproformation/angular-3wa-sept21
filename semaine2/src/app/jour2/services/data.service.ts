/* import { Injectable } from "@angular/core"
// il est possible d'ajouter un décorateur 
@Injectable({
    providedIn: 'root'
}) */
interface Produit{
    id : number, 
    nom : string, 
    prix : number
};

export class DataService{
    private data : Array<Produit> = [
        {id : 1, nom : "Produit 1", prix : 25},
        {id : 2, nom : "Produit 2", prix : 100},
        {id : 3, nom : "Produit 3", prix : 12},
        {id : 4, nom : "Produit 4", prix : 43}
    ];

    public getAll() : Array<Produit> {
        return this.data;
    }

    public get( id : number ) : Array<Produit> {
        return this.data.filter( (item : Produit) =>  item.id === id  );
    }

    public delete( id : number ) : boolean{
        const produitASupprimer : (Produit|undefined) = this.data.find( item => item.id === id);
        if(produitASupprimer === undefined){
            return false;
        }
        const index : number = this.data.indexOf(produitASupprimer)  ; 
        this.data.splice(index, 1);
        return true;
    }

}
