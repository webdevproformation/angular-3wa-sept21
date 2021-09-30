import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NewsletterComponent } from './jour4/newsletter.component';
import { Form1Component } from './jour4/form1.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    Form1Component
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
