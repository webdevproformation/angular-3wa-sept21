import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CvComponent } from './jour5/cv.component';
import { UploadComponent } from './jour5/upload.component';



@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    UploadComponent
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
