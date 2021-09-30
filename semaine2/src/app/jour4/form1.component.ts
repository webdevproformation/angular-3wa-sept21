import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl , Validators} from "@angular/forms"

@Component({
  selector: 'form1',
  template: `
    <h3>Form1</h3>
    <form [formGroup]="form">
      <input type="text" class="form-control" name="nom" formControlName="nom">
      <div class="alert alert-dark text-light" *ngIf="nom?.touched && nom?.invalid">
        veuillez remplir le champ nom - required
      </div>
      <textarea class="form-control" name="commentaire" formControlName="commentaire"></textarea>
      <div class="alert alert-dark text-light" *ngIf="commentaire?.touched && commentaire?.invalid">
        <div *ngIf="commentaire?.errors?.required">le champ est requis</div>
        <div *ngIf="commentaire?.errors?.minlength">minimum 10</div>
        <div *ngIf="commentaire?.errors?.maxlength">max 100</div>
        <div *ngIf="commentaire?.errors?.pattern">lettre ou espace !! </div>
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
    <p>{{ form.value | json }}</p> 
    <p>{{ commentaire?.errors | json }}</p> 
    <!-- pause café rdv dans 11h17 @ toute suite !!! -->
  `
})
export class Form1Component implements OnInit {
  get commentaire(){
    return this.form.get("commentaire");
  }

  public form : FormGroup = new FormGroup({
    nom : new FormControl("" , Validators.required),
    commentaire : new FormControl("commentaire par défaut" , 
      [ 
        Validators.required , 
        Validators.minLength(5) , 
        Validators.maxLength(1000),
        Validators.pattern(/^[a-z ]+$/)
      ]
    )
  })

  

  get nom(){
    return this.form.get("nom");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
