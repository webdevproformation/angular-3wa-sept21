import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
    <nav class="navbar navbar-expand bg-dark navbar-dark justify-content-between">
      <span class="navbar-brand ms-2">{{title}}</span>
      <ng-content select=".info"></ng-content>
      <ng-content></ng-content>
    </nav>
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  @Input() title : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
