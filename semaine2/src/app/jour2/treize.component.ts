import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treize',
  template: `
      <button (click)="action1()">action 1</button>
      <button (click)="action2()">action 2</button>
      <button (click)="action3()">action 3</button>
      <p *ngIf="show" [style]="style" [innerText]="contenu"></p>
  `,
  styles: [
  ]
})
export class TreizeComponent implements OnInit {
  public contenu : (string|number) = "";
  private compteur : number = 0;
  public show : boolean = true;
  public style : string = "";

  public action1():void{
    this.compteur++;
    if(this.compteur > 0){
      this.contenu = this.compteur
    }
  }
  public action2():void{
    this.show = !this.show;
  }
  public action3() :string{
    if(this.style == ""){
      return this.style = "font-size:30px;color:red"
    }
    return this.style = "";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
