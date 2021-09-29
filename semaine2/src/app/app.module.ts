import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ArticleComponent } from './jour3/article.component';
import { LikeComponent } from './jour3/like.component';
import { CommentaireComponent } from './jour3/commentaire.component';
import { InstagramComponent } from './jour3/instagram.component';
import { MenuComponent } from './jour3/menu.component';
import { StyleComponent } from './jour3/style.component';
import { SidebarComponent } from './jour3/sidebar.component';
import { NewsletterComponent } from './jour3/newsletter.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    CommentaireComponent,
    InstagramComponent,
    MenuComponent,
    StyleComponent,
    SidebarComponent,
    NewsletterComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
