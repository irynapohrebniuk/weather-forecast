import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DailyForecastComponent } from '../daily-forecast/daily-forecast.component';
import {Utilities} from '../utilities'
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    DailyForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Utilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
