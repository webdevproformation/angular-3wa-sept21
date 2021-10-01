import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http" ;
import { AppComponent } from './app.component';
import { CvComponent } from './jour5/cv.component';
import { UploadComponent } from './jour5/upload.component';
import { ExoComponent } from './jour5/exo.component';
import { Obs1Component } from './jour5/obs1.component';
import { Obs2Component } from './jour5/obs2.component';
import { Obs3Component } from './jour5/obs3.component';
import { Obs4Component } from './jour5/obs4.component';
import { Obs5Component } from './jour5/obs5.component';
import { Obs6Component } from './jour5/obs6.component';
import { ArticleComponent } from './jour5/article.component';
@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    UploadComponent,
    ExoComponent,
    Obs1Component,
    Obs2Component,
    Obs3Component,
    Obs4Component,
    Obs5Component,
    Obs6Component,
    ArticleComponent
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
