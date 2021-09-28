import { Component } from "@angular/core";
import { DataService } from "./services/data.service"; 

@Component({
    template : `<div>
                    <h2>Composant 2 - coucou</h2>
                    <p>lorem ipsum</p>
                </div>
                <ul>
                    <li *ngFor="let produit of produits">
                        {{ produit.nom }} - {{ produit.prix }}
                        <button (click)="suppr(produit.id)">suppression</button>
                    </li>
                </ul>
                
                `,
    selector : "deux",
    styles : [`
                ul{ padding : 0} 
                li{ padding-bottom : 20px} 
            `]
    
})
export class DeuxComponent{
    public produits ;
    public suppr(id: number){
        this.services.delete(id); 
    }
    constructor(public services : DataService){
        this.produits = services.getAll();
    }
}