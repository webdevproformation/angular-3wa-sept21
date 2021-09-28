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
      <article>
        <dix></dix>
      </article>
      <article>
        <onze></onze>
      </article>
      <article>
        <douze></douze>
      </article>
      <article>
        <treize></treize>
      </article>
    </section>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semaine2';
}
