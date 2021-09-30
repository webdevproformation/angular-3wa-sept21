import { Component, OnInit } from '@angular/core';
import { addressValidator } from "./customValidator";
import {FormGroup, FormControl} from "@angular/forms"

@Component({
  selector: 'form3',
  template: `
    <h3>Validation personnalisée</h3>
    <form [formGroup]="form">
      <input type="text" name="adresse" class="form-control" formControlName="adresse">
      <input type="text" name="login" class="form-control" formControlName="login">
    </form>
    <p>{{adresse?.errors | json}}</p>

    <div *ngIf="login?.pending" class="alert alert-primary">en train de vérifier si l'identifiant existe ??</div>
    <p *ngIf="login?.errors" class="alert alert-danger">{{login?.errors?.message}}</p>

  `,
  styles: [
  ]
})
export class Form3Component implements OnInit {
  // 22 rue du Paradis 75000 Paris
  public form : FormGroup = new FormGroup({
      adresse : new FormControl("", addressValidator.validAddress ),
      login : new FormControl("", null, addressValidator.unique )
  })

  get adresse(){
    return this.form.get("adresse")
  }

  get login (){
    return this.form.get("login")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
