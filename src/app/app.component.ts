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
  @ViewChild('form') inputValue;
  faCrosshairs = faCrosshairs;
  title = 'weather-forecast';
  city = '';
  data = null;
  hourlyData = null;
  incorrectLocation = false;
  incorrectGeoLocation = false;
  isWaiting = false;
  lat;
  lng;

  constructor(
    private calcService: CalcService,
    private weatherService: WeatherService) { }

  ngOnInit() {
      this.getUserLocation();
  }

  getUserLocation() {
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

  getTimeNow() {
    const day = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const localDate = day.toLocaleDateString('en-EN', options);
    return localDate.toUpperCase();
  }

  getLTime(dateObj) {
    return this.calcService.getTime(dateObj);
  }
  getLDate(dateObj) {
    return this.calcService.getDate(dateObj);
  }

  handleGeoLocation() {
    this.weatherService.getGeoData(this.lat,this.lng).
      subscribe(
        (data: ILocation) => {
        this.data = data;
        this.handleSearch(data.name);
        this.inputValue.resetForm();
        },
        err => {
        this.incorrectGeoLocation = err;
        }
      );
  }

  handleSearch(location) {
    location = location.trim();
    this.isWaiting = true;
    this.weatherService.getData(location)
      .subscribe(
        (data: IWeather) => {
          this.data = data;
          this.incorrectLocation = false;
          this.isWaiting = false;
        },
        err => {
          this.incorrectLocation = err;
          this.city = location;
          this.isWaiting = false;
        }
      );
    this.weatherService.getHourlyData(location)
      .subscribe((hourlyData: IHourlyForecast) => this.hourlyData = hourlyData);
    this.inputValue.resetForm();
  }

}
