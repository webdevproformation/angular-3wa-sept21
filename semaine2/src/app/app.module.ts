import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './jour3/article.component';
import { LikeComponent } from './jour3/like.component';
import { CommentaireComponent } from './jour3/commentaire.component';
import { InstagramComponent } from './jour3/instagram.component';
import { MenuComponent } from './jour3/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    CommentaireComponent,
    InstagramComponent,
    MenuComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
