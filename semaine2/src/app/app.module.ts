import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComponent } from './jour2/premier.component';
import { DeuxComponent } from './jour2/deux.component';
import { TroisComponent } from './jour2/trois/trois.component';
import { QuatreComponent } from './jour2/quatre.component';
import { CinqComponent } from './jour2/cinq.component';
import { SixComponent } from './jour2/six.component';
import { SeptComponent } from './jour2/sept.component';
import { HuitComponent } from './jour2/huit.component';
import { NeufComponent } from './jour2/neuf.component';
import { DixComponent } from './dix.component';


@NgModule({
  declarations: [
    AppComponent ,
    PremierComponent ,
    DeuxComponent,
    TroisComponent,
    QuatreComponent,
    CinqComponent,
    SixComponent,
    SeptComponent,
    HuitComponent,
    NeufComponent,
    DixComponent // rdv 11h15 @ toute suite !!
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
