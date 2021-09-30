import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NewsletterComponent } from './jour4/newsletter.component';
import { Form1Component } from './jour4/form1.component';
import { Form2Component } from './jour4/form2.component';
import { Form3Component } from './jour4/form3.component';
import { Form4Component } from './jour4/form4.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component
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
