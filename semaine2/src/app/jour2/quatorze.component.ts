import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quatorze',
  template: `
    <button (click)="showOnglet(0)">onglet 1</button>
    <button (click)="showOnglet(1)">onglet 2</button>
    <button (click)="showOnglet(2)">onglet 3</button>
    <p *ngFor="let onglet of onglets" [hidden]="onglet.show">{{ onglet.text }}</p>
  `,
  styles: [
  ]
})
export class QuatorzeComponent implements OnInit {
  public onglets : Array<{show:boolean , text:string}> = [
    {
      show : false ,
      text : "onglet 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam atque harum ea voluptatibus itaque. Architecto dolor delectus modi nihil aperiam quo soluta totam voluptates nam mollitia hic, autem aliquid eligendi."
    },
    {
      show : true ,
      text : "onglet 2  Architecto dolor delectus modi nihil aperiam quo soluta totam voluptates nam mollitia hic, autem aliquid eligendi. Veniam atque harum ea voluptatibus itaque."
    },
    {
      show : true ,
      text : "onglet 3  Veniam atque harum ea voluptatibus itaque. Architecto dolor delectus modi nihil aperiam quo soluta totam voluptates nam mollitia hic, autem aliquid eligendi. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }
  ]
  public showOnglet(id :number) : void{
    this.onglets.forEach( item => item.show = true);
    this.onglets[id].show = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// service => permettre de partager de données entre les différents composants 
// rdv dans 16h23 @ toute suite !!! 
