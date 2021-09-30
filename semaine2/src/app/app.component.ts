import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <header class="row">
        <h1>{{ title }}</h1>
      </header>
  </div>`
})
export class AppComponent {
  title = 'jour4';
}