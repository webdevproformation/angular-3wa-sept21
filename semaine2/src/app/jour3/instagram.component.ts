import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'instagram',
  template: `
    <div class="my-3">
      <h2 class="fs-5">Instagram</h2>
      <button class="btn btn-warning btn-sm" (click)="diminuer()"> - </button>
      <span class="badge bg-danger mx-3">{{ instagram }}</span>
      <button class="btn btn-dark btn-sm" (click)="augmenter()"> + </button>
    </div>
  `,
  styles: [
  ]
})
export class InstagramComponent implements OnInit {

  @Input() instagram : number = 0 ;
  @Output() actionDiminuer = new EventEmitter<number>()
  @Output() actionAugmenter = new EventEmitter<number>()


  public  diminuer(){
    this.actionDiminuer.emit()
  }
  public  augmenter(){
    this.actionAugmenter.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
