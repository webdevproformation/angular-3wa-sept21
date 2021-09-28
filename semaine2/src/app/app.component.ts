import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <section class="row">
      <article>
        <Premier></Premier>
      </article>
      <article>
        <deux></deux>
      </article>
      <article>
        <neuf></neuf>
      </article>
    </section>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semaine2';
}
