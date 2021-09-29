import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  template: `
  <div>
    <button class="btn btn-success me-2" (click)="clickBtn(data)" >action</button>
    <span class="badge bg-primary">{{ data }}</span>
  </div>
  `,
  styles: [
  ]
})
export class LikeComponent implements OnInit {

  @Input() data : number = 0 ; 

  @Output() augmenter = new EventEmitter<number>() ;

  public clickBtn(data :number){
    this.augmenter.emit(data);
  }

  constructor( ) { }

  ngOnInit(): void {
  }

}
