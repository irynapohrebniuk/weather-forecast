import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../interfaces/weather.inteface';
import { IHourlyForecast } from '../interfaces/hourly-forecast.inteface';
import { CalcService } from '../services/calc-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, CalcService]
})

export class AppComponent {
  
  title = 'weather-forecast';
  location = '';
  data = null;
  hourlyData = null;

  constructor(private calcService: CalcService,
    private weatherService: WeatherService) { }

  toCelcius(kelvin) {
    return this.calcService.toCelsius(kelvin);
  }

  parseTime(timestamp) {
    return this.calcService.parseTime(timestamp);
  }

  handleSearch(location) {
    this.location = location;

    this.weatherService.getData(location)
      .subscribe((data: IWeather) => this.data = data);
    this.weatherService.getHourlyData(location)
      .subscribe((hourlyData: IHourlyForecast) => this.hourlyData = hourlyData);
  }

}
