import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , FormArray, Validators } from "@angular/forms"

@Component({
  selector: 'cv',
  template: `
    <h3>votre cv</h3>
    <form [formGroup]="form" (ngSubmit)="submitCv()">
      <div class="form-group" formGroupName="profil">
        <input type="text" name="prenom" formControlName="prenom" class="form-control">
        <input type="text" name="nom" formControlName="nom" class="form-control">
        <input type="date" name="dt_naissance" formControlName="dt_naissance" class="form-control">
      </div>
      <h4>Compétences </h4>
      <button class="btn btn-success my-2" (click)="ajouterCompetence()">Ajouter une compétence </button>
      <div formArrayName="competences">
        <div *ngFor="let competence of competences.controls; index as i" class="d-flex my-3">
          <input type="text" [formControlName]="i" class="form-control">
          <button class="btn btn-warning ms-2" (click)="supprimerCompetence(i)">supprimer</button>
        </div>
      </div>
      <h4>Message </h4>
      <textarea formControlName="message" class="form-control"></textarea>
      <input type="submit" class="btn btn-secondary">
    </form>`
})
export class CvComponent implements OnInit {
  public supprimerCompetence(index : number){
    this.competences.removeAt(index);
    // https://www.concretepage.com/angular/angular-formarray
  }

  public ajouterCompetence(){
    this.competences.push( new FormControl());
  }
  get competences () {
    return this.form.get("competences") as FormArray;
  }

  public form : FormGroup = new FormGroup({
    profil : new FormGroup({
      prenom : new FormControl(),
      nom : new FormControl(),
      dt_naissance : new FormControl("", Validators.required),
    }),
    message : new FormControl(),
    competences : new FormArray([ new FormControl(), new FormControl()])
  });
  public submitCv(){
    if(this.form.valid){
      console.log(this.form.value);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
