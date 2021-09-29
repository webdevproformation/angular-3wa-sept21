import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  template: `
  <div>
    <button class="btn btn-success me-2">action</button>
    <span class="badge bg-primary">{{ data }}</span>
  </div>
  `,
  styles: [
  ]
})
export class LikeComponent implements OnInit {

  @Input() data : number = 0 ; 

  constructor( ) { }

  ngOnInit(): void {
  }

}
