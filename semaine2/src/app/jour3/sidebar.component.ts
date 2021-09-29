import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
    <h1 [ngClass]="{ 'important': actif , 'main' : !actif }" class="fs-5">barre latérale</h1>
    <p [ngStyle]="{ 'color':'blue' , 'font-weight' : 'bold' }">lorem ipsum</p>
    <p [ngStyle]="styleP">lorem ipsum</p>
    <h2>section 2</h2>
    <div [ngSwitch]="role">
      <div *ngSwitchCase="'admin'">
        <ul>
          <li>gérer les articles</li>
          <li>gérer les comptes utilisateurs</li>
        </ul>
      </div>
      <div *ngSwitchCase="'redacteur'">
        <ul>
          <li>gérer ses articles</li>
        </ul>
      </div>
      <div *ngSwitchDefault>
        <ul>
          <li>se connecter au back office</li>
        </ul>
      </div>
    </div>
    <h2>Two Way Binding</h2>
    <p>{{ text }}</p>
    <!-- modifier une propriété dans la class depuis la vue  depuis le html -->
    <input type="text" [(ngModel)]="sujet" (click)="clickInput()">
    <!-- Can't bind to 'ngModel' since it isn't a known property of 'input'. -->
    <!--  property binding []=> class => vue 
          event binding    () => vue => class 
          two way binding =  property binding [] + event binding ()
    -->
  `,
  styles: [
      `
        .important{
          color:red;
          text-decoration: underline
        }
        .main{
          color:purple;
          text-decoration: overline
        }
      `

  ]
})
export class SidebarComponent implements OnInit {
  public clickInput(){
    alert(this.sujet);
  }
  public sujet : string = "nodejs";
  public text : string = "lorem ipsum";
  public role : string = "redacteur";
  public actif : boolean = false;
  public styleP = { 
    color: "green",
    textAlign : "center"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
