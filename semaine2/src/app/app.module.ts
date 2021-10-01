import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CvComponent } from './jour5/cv.component';



@NgModule({
  declarations: [
    AppComponent,
    CvComponent
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
