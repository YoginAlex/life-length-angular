import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LifeLengthComponent } from './life-length/life-length.component';
import { IntervalComponent } from './life-length/interval/interval.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeLengthComponent,
    IntervalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
