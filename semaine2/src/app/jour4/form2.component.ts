import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl , Validators , ValidatorFn } from "@angular/forms";

@Component({
  selector: 'form2',
  template: `
    <h3>Exo Form</h3>
    <form [formGroup]="form">
      <input type="text" name="sujet" class="form-control" formControlName="sujet">
      <select name="pays" class="form-select" formControlName="pays">
        <option value="">sélectionner un pays</option>
        <option value="france">France</option>
        <option value="allemagne">Allemagne</option>
        <option value="belgique">Belgique</option>
      </select>
      <textarea class="form-control" name="message"  formControlName="message"></textarea>
      <input type="submit" class="btn btn-info">
    </form>
    <p>{{ sujet?.errors | json }}</p>
    <p>{{ pays?.errors | json }}</p>
    <p>{{ message?.errors | json }}</p>
  `,
  styles: [
  ]
})
export class Form2Component implements OnInit {

  private validationMessage : Array<ValidatorFn> = [
    Validators.required , 
    Validators.minLength(5),
    Validators.maxLength(1000),
    Validators.pattern(/^[a-zA-Z0-9 \n]+$/), // \newline
  ]

  public form : FormGroup = new FormGroup({
    sujet : new FormControl("", [Validators.required , Validators.minLength(5)]),
    pays : new FormControl("", [Validators.required , Validators.minLength(1)]),
    message : new FormControl("", this.validationMessage ),
  })

  get sujet(){
    return this.form.get("sujet")
  }

  get pays(){
    return this.form.get("pays")
  }

  get message(){
    return this.form.get("message")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
