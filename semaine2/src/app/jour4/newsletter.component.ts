import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newsletter',
  template: `
    <form class="d-flex" #f="ngForm" (submit)="newsletterSubmit(f)">
      <input type="email" name="email" class="form-control" #email="ngModel" ngModel required minlength="5" maxlength="100" placeholder="votre@email.fr">
      <input type="submit" class="btn btn-primary ms-2">
    </form>
    <div class="alert alert-warning" *ngIf="email.touched && email.invalid">
      <div *ngIf="email.errors?.required">veuillez remplir le champ</div>
      <div *ngIf="email.errors !== null && email.errors.required">veuillez remplir le champ version longue</div>
      <div *ngIf="email.errors?.minlength">le champ doit contenir 5 caractères</div>
      <div *ngIf="email.errors?.maxlength">le champ doit contenir 100 caractères au maximum</div>
    </div>
  `
})
export class NewsletterComponent implements OnInit {

  public newsletterSubmit(f :any){
    if(f.valid){
      console.log(f.value);
      f.reset() // une fois que le formulaire est traité => vider toutes les valeurs saisies !! 
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
