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
import { OnzeComponent } from './jour2/onze.component';
import { DouzeComponent } from './jour2/douze.component';
import { TreizeComponent } from './jour2/treize.component';
import { QuatorzeComponent } from './jour2/quatorze.component';


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
    DixComponent,
    OnzeComponent,
    DouzeComponent,
    TreizeComponent,
    QuatorzeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
