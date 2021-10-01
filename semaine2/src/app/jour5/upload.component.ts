import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'upload',
  template: `
    <h3>uploader des images</h3>
    <form [formGroup]="form" (ngSubmit)="soumettre()">
      <input type="text" name="sujet" formControlName="sujet" class="form-control">
      <input type="date" name="date" formControlName="date" class="form-control">
      <h4>Description</h4>
      <div formGroupName="description" class="d-flex">
        <input type="text" name="adresse" formControlName="adresse" class="form-control" placeholder="adresse">
        <input type="text" name="ville" formControlName="ville" class="form-control" placeholder="ville">
      </div>
      <h4>télécharger des images :</h4>
      <div formArrayName="images">
        <button class="btn btn-primary" (click)="ajouterImage()">ajouter une image</button>
        <div *ngFor="let image of images.controls; index as i" class="d-flex my-2">
          <input type="file" class="form-control" [formControlName]="i" >
          <button class="btn btn-danger ms-2" (click)="supprimerImage(i)">supprimer</button>
        </div>
      </div>
      <input type="submit" class="btn btn-dark my-3">
    </form>
  `
})
export class UploadComponent implements OnInit {

  public supprimerImage(i :number){
    this.images.removeAt(i);
  }

  public ajouterImage(){
    this.images.push(this.formBuilder.control(""));
  }

  public soumettre(){
    if(this.form.valid){
      console.log(this.form.value);
    }
  }

  get images (){
    return this.form.get("images") as FormArray;
  }

  public form  = this.formBuilder.group(
    {
      sujet : ["", Validators.required],
      date : this.formBuilder.control("" , Validators.required),
      description : this.formBuilder.group({
        adresse : [],
        ville : []
      }),
      images : this.formBuilder.array([ [] , this.formBuilder.control("") ])
    }
  ) ;

  constructor(public formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

}
