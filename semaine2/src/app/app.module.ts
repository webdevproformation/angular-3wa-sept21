import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NewsletterComponent } from './jour4/newsletter.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
