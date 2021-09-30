import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from "@angular/forms";

@Component({
  selector: 'login',
  template: `
    <form [formGroup]="f" (ngSubmit)="toto()">
      <input type="text" name="login" placeholder="login" formControlName="login">
      <input type="password" name="password" placeholder="password" formControlName="password">
      <input type="submit">
    </form>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  f = new FormGroup({
    login : new FormControl("valeur par défaut"),
    password : new FormControl()
  }) 

  public toto(){
    console.log(this.f.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
