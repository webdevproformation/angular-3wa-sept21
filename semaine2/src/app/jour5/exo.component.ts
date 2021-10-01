import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms"

@Component({
  selector: 'exo',
  template: `
    <h3>Exo</h3>
    <form [formGroup]="form" (ngSubmit)="submitExo()">
      <input type="text" name="nom" formControlName="nom" class="form-control">
      <select name="pays" formControlName="pays" class="form-select">
        <option value="">sélectionner </option>
        <option value="france">France </option>
        <option value="allemagne">Allemagne </option>
        <option value="belgique">Belgique </option>
      </select>
      <h4>Adresse</h4>
      <div formGroupName="adresse" class="d-flex">
        <input type="text" name="rue" formControlName="rue" class="form-control">
        <input type="text" name="ville" formControlName="ville" class="form-control mx-2">
        <input type="text" name="cp" formControlName="cp" class="form-control">
      </div>
      <h4>Hobbies :</h4>
      <div formArrayName="hobbies">
        <button class="btn btn-outline-success my-3" (click)="ajouter()">Ajouter hobby</button>
        <section *ngFor="let hobby of hobbies.controls;index as i" >
        <!-- rdv 14h00 @ toute suite !! -->
          <div [formGroupName]="i" class="d-flex my-3">
            <input type="text" name="text" formControlName="text" class="form-control">
            <input type="date" name="date" formControlName="date" class="form-control mx-2">
            <button class="btn btn-outline-danger" (click)="supprimer(i)">suppr</button>
          </div>
        </section>
      </div>
      <input type="submit" class="btn btn-light border border-primary mt-3"> 
    </form>
  `
})
export class ExoComponent implements OnInit {

  constructor(public frmBuilder : FormBuilder) { }

  public supprimer(i : number){
    this.hobbies.removeAt( i );
  }

  public ajouter(){
    const h = this.frmBuilder.group({ text : [] , date : [] })
    this.hobbies.push( h );
  }

  public submitExo(){
    console.log(this.form.value);
  }

  public get hobbies(){
    return this.form.get("hobbies") as FormArray ;
  } 

  public form = this.frmBuilder.group({
    nom : [],
    pays : ["france"] ,
    adresse : this.frmBuilder.group({
      rue : [],
      ville : [],
      cp : []
    }),
    hobbies : this.frmBuilder.array([
      this.frmBuilder.group({ text : [] , date : [] }),
      this.frmBuilder.group({ text : [] , date : [] })
    ])

  })

  

  ngOnInit(): void {
  }

}
