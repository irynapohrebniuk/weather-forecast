import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {Utilities} from '../utilities'
import { HttpClientModule } from '@angular/common/http';
import { HourlyWeatherComponent } from '../hourly-weather/hourly-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HourlyWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Utilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
