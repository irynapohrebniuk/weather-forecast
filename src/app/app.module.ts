import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {Utilities} from '../utilities'
import { HttpClientModule } from '@angular/common/http';
import { HourlyWeatherComponent } from '../hourly-weather/hourly-weather.component';
import { HourlyWeatherDetailsComponent } from '../hourly-weather-details/hourly-weather-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HourlyWeatherComponent,
    HourlyWeatherDetailsComponent
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
