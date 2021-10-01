import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CvComponent } from './jour5/cv.component';
import { UploadComponent } from './jour5/upload.component';
import { ExoComponent } from './jour5/exo.component';
import { Obs1Component } from './jour5/obs1.component';
import { Obs2Component } from './jour5/obs2.component';



@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    UploadComponent,
    ExoComponent,
    Obs1Component,
    Obs2Component
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
