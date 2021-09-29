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
      </section>
      <section class="row">
        <div class="col-6">
          <jour3-article></jour3-article>
        </div>
        <div class="col-6">
          <jour3-style></jour3-style>
        </div>
      </section>
  </div>`
})
export class AppComponent {
  title = 'jour3';
}
// rdv 14h06 bon appétit !!!!!!!! 