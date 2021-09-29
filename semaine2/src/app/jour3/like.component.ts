import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  template: `
  <div>
    <button class="btn btn-success me-2" (click)="clickBtn()" >action</button>
    <span class="badge bg-primary">{{ data }}</span>
  </div>
  `,
  styles: [
  ]
})
export class LikeComponent implements OnInit {

  @Input() data : number = 0 ; 

  @Output() augmenter = new EventEmitter() ;

  public clickBtn(){
    this.augmenter.emit();
  }

  constructor( ) { }

  ngOnInit(): void {
  }

}
