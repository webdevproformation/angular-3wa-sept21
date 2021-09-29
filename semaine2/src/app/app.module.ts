import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './jour3/article.component';
import { LikeComponent } from './jour3/like.component';
import { CommentaireComponent } from './jour3/commentaire.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    CommentaireComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
