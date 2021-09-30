import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <header class="row">
        <h1>{{ title }}</h1>
      </header>
      <section class="row">
        <newsletter></newsletter>
      </section>
      <section class="row">
        <h2>Reactive Forms</h2> 
        <div class="col-4">
          <form1></form1>
        </div> 
        <div class="col-4">
          <form2></form2>
        </div> 
        <div class="col-4">
          <form3></form3>
        </div> 
      </section>
  </div>`
})
export class AppComponent {
  title = 'jour4';
}