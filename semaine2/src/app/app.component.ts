import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>{{ title }}</h1>
      <hr>
      <section class="row">
        <jour3-article></jour3-article>
      </section>
  </div>`
})
export class AppComponent {
  title = 'jour3';
}
