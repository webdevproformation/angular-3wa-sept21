import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from "@angular/forms";
import {addressValidator} from "./customValidator"

@Component({
  selector: 'form4',
  template: `
    <h3>Exo</h3>
    <form [formGroup]="form">
      <input type="text" name="password" class="form-control" formControlName="password">
      <p>{{password?.errors | json}}</p>
      <input type="text" name="text" class="form-control" formControlName="service">
      <p>{{service?.errors | json}}</p>
    </form>
    
  `,
  styles: [
  ]
})
export class Form4Component implements OnInit {

  public form : FormGroup = new FormGroup({
    password : new FormControl("", addressValidator.validPassword),
    service : new FormControl("",null ,addressValidator.validService)
  })

  get password(){
    return this.form.get("password");
  }
  get service(){
    return this.form.get("service");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
