import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  template: `
    <h2>Nous contacter : </h2>
    <form #f="ngForm" (submit)="submitFormulaire(f , email, commentaire)">
      <div class="form-group">
        <label for="email">votre email :</label>
        <input type="text" placeholder="email@yahoo.fr" name="email" class="form-control" id="email" 
          #email="ngModel" ngModel (change)="onChangeEmail(email)"
          required 
          minlength="10"
          maxlength="100"
          pattern="^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9]+\.[a-z]{2,}$"
        >
        <div class="alert alert-danger" *ngIf="email.touched && !email.valid">
          <div *ngIf="email.errors?.required">Email est requis</div>
          <div *ngIf="email.errors?.minlength">email doit avoir au minimum {{ email.errors?.minlength.requiredLength }} caractères</div>
          <div *ngIf="email.errors?.pattern">email doit suivre le pattern {{ email.errors?.pattern.requiredPattern }}</div>
        </div>
      </div>
      <div class="form-group">
      <label for="commentaire">votre commentaire :</label>
      <textarea placeholder="votre commentaire" name="commentaire" class="form-control" id="commentaire"
        #commentaire="ngModel" ngModel
        required
        minlength="10"
        maxlength="1000"
        pattern="^[a-zA-Z0-9.-_ ]+$"
      ></textarea>
      </div>
      <div class="form-group my-4">
        <input type="submit" class="btn btn-dark btn-lg " [disabled]="!f.valid">
      </div>
    </form>
    <div class="alert alert-success" *ngIf="show">
      Merci pour votre message 
    </div> 
  `
})
export class ContactComponent implements OnInit {
  public show : boolean = false;

  public onChangeEmail(email :any){
      console.log(email.errors)
  }
  public submitFormulaire( f :any , email :any , commentaire :any){
    if(f.valid){
      console.log(f.value);
      // envoyer les informations saisit à un service
      // mettre un message que tout est conforme 
      this.show = true;
      setTimeout( () =>{
        this.show = false ;
      } , 2000);

      f.reset() // réinitialise le formulaire 

      console.log(f.valid);
      // idée claire de l'état des champs 
      console.log(email.valid , commentaire.valid);
      console.log(email.errors , commentaire.error);
      console.log(email.touched , commentaire.touched);
      console.log(email.untouched , commentaire.untouched);
      console.log(email.dirty , commentaire.dirty); // est ce que le champ a été modifié par rapport à sa valeur initiale
      console.log(email.pristine , commentaire.pristine); // est ce que le champ a été conservée par rapport à sa valeur initiale 
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
