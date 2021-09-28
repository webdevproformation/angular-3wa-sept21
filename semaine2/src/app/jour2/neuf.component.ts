import { Component, OnInit } from '@angular/core';

interface Social {
  fb ?:number,
  instagram ?:number,
  youtube ?:number
}

@Component({
  selector: 'neuf',
  template: `
    <!-- commentaire interpolation -->
    <h2>{{ titre }}</h2>
    <p>{{ contenu }}</p>
    <ul>
      <li>auteur : {{ meta[0] }}</li>
      <li>status : {{ meta[1] }}</li>
      <li>date publication <br>{{ dtPublication() }}</li>
    </ul>
    <ul>
      <li>facebook : {{ social[0].fb }}</li>
      <li>youtube : {{ social[2].youtube }}</li>
    </ul>
  `,
  styles: [
  ]
})
export class NeufComponent implements OnInit {
  public titre : string = "premier variable";
  public contenu : string = "lorem ipsum modifié";
  public meta : Array<string> = ["moi", "publie"];
  public social : Array<Social> = [ 
    {fb : 12 },
    {instagram : 20 },
    {youtube : 0 }
  ];
  private heure : string = `11h54`;

  public dtPublication() :string{
    const dt = new Date();
    return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()} : ${this.heure}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
