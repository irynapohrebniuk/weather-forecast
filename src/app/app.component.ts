import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Utilities } from '../utilities'
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../interfaces/weather.inteface';
import { IHourlyForecast } from '../interfaces/hourly-forecast.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService]
})

export class AppComponent {
  title = 'weather-forecast';
  location = '';
  data = null;
  hourlyData = null;

  getCelcius(kelvin) {
    return Utilities.calculate(kelvin);
  }

  constructor(private weatherService: WeatherService){}

  parseTime(timestamp) {
    const dateObject = new Date(timestamp * 1000);
    let options = { hour12: false };
    return dateObject.toLocaleTimeString([], options)
  }
  
  handleSearch(location) {
    this.location = location;

      this.weatherService.getData(location)
          .subscribe((data:IWeather) => this.data = data);
      this.weatherService.getHourlyData(location)
          .subscribe((hourlyData:IHourlyForecast) => this.hourlyData = hourlyData);
    }

}
