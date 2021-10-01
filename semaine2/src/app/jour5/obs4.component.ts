import { Component, OnInit } from '@angular/core';
import { of , from, Observable } from "rxjs";

@Component({
  selector: 'obs4',
  template: `
    <p>
      obs4 works!
    </p>
  `,
  styles: [
  ]
})
export class Obs4Component implements OnInit {

  public getTab1 () : Observable<Array<number>>{
    return of([1,2,3,4]); // envoyer en intégralité en 1 fois 
  }

  public getTab2() : Observable<string>{
    return from (["a", "b", "c"]); // envoyer chaque donnée du tableau
  }

  constructor() { }

  ngOnInit(): void {
    this.getTab1().subscribe( (data : Array<number> ) => { 
      console.log("getTab1")
      console.log(data);
    })

    this.getTab2().subscribe( (data : string) => {
      console.log("getTab2")
      console.log(data);
    })

  }

}
