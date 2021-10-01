import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <header class="row">
        <h1>{{ title }}</h1>
      </header>
      <section  class="row">
        <div class="col-4">
          <obs1></obs1>
        </div>
        <div class="col-4">
          <obs2></obs2>
        </div>
        <div class="col-4">
          <obs3></obs3>
        </div>
        <div class="col-4">
          <obs4></obs4>
        </div>
        <div class="col-4">
          <obs5></obs5>
        </div>
      </section>
      <hr>
      <section class="row">
        <div class="col-4">
          <cv></cv>
        </div>
        <div class="col-4">
          <upload></upload>
        </div>
        <div class="col-4">
          <exo></exo>
        </div>
      </section>
  </div>`
})
export class AppComponent {
  title = 'jour5';
}