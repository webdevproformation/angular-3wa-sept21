import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newsletter',
  template: `
  <h2>S'inscrire à la newsletter</h2>
  <div class="d-flex">
    <input type="text" [(ngModel)]="email" placeholder="email">
    <input type="text" [(ngModel)]="service" class="mx-3" placeholder="service">
    <input type="button" class="btn btn-primary btn-sm" value="Envoyer" (click)="submitNewsletter()">
  </div>
  <p *ngIf="show" class="alert alert-success mt-2">
    votre demande va être traitée dans les meilleurs délais
  </p>
  `,
  styles: [
  ]
})
export class NewsletterComponent implements OnInit {
  public email : string = "";
  public service : string = "";
  public show : boolean = false;
  public submitNewsletter(){
    // est ce que this.email est valide 
    const patternEmail : RegExp = /^[a-zA-Z0-9\.\-]+@[a-zA-Z]+\.[a-z]{2,}$/;
    if(patternEmail.test(this.email) && this.service === "web"){
      this.show = true ;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
