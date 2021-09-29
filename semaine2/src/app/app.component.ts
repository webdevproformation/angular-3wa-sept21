import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <section class="row">
        <menu [title]="title">
          <form class="d-flex me-2">
            <input type="text" class="form-control" placeholder="rechercher">
            <input type="submit" class="btn btn-danger ms-2">
          </form>
          <p class="text-light info" >Description</p>
        </menu>
        <hr>  
        <jour3-article></jour3-article>
      </section>
  </div>`
})
export class AppComponent {
  title = 'jour3';
}
