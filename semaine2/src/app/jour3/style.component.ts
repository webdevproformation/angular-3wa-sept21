import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jour3-style',
  encapsulation:ViewEncapsulation.Emulated , 
  // faire en sorte que le css du composant va déborder sur les autres composants None
  // par défaut Emulated
  template: `
    <h1>je suis un titre</h1>
    <h2>sous titre</h2>
    <p>lorem ipsum </p>
  `,
  styles: [
    `h1{
      color:red;
    }
    h2{
      color:purple;
    }
    p{
      color: pink;
    }
    `
  ]
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
