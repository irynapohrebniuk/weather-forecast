import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../interfaces/weather.inteface';
import { IHourlyForecast } from '../interfaces/hourly-forecast.inteface';
import { CalcService } from '../services/calc-service';
import { ILocation } from 'src/interfaces/location.inteface';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, CalcService]
})

export class AppComponent implements OnInit  {
  @ViewChild('form') formValues;
  faCrosshairs = faCrosshairs;
  title = 'weather-forecast';
  location = "Wroclaw";
  data = null;
  dataGeo = null;
  hourlyData = null;
  lat;
  lng;

  constructor(
    private calcService: CalcService,
    private weatherService: WeatherService) { }

  ngOnInit() {
      this.getUserLocation();
  }

  getUserLocation() {
    // get Users current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  toCelcius(kelvin) {
    return this.calcService.toCelsius(kelvin);
  }

  parseTime(timestamp) {
    return this.calcService.parseTime(timestamp);
  }

  handleGeoLocation() {
    this.weatherService.getGeoData(this.lat,this.lng).
      subscribe((data: ILocation) => {
        this.data = data;
        this.handleSearch(data.name);
        this.formValues.resetForm();
      });
  }

  handleSearch(location) {
    location = location.trim();
    this.weatherService.getData(location)
      .subscribe((data: IWeather) => this.data = data);
    this.weatherService.getHourlyData(location)
      .subscribe((hourlyData: IHourlyForecast) => this.hourlyData = hourlyData);
      this.formValues.resetForm();
  }

}
