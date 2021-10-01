import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <header class="row">
        <h1>{{ title }}</h1>
      </header>
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