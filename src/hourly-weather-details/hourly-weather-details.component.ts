import { Component, Input } from '@angular/core';
import { IHourlyForecast } from 'src/interfaces/hourly-forecast.inteface';
import { CalcService } from 'src/services/calc-service';

@Component({
  selector: 'app-hourly-weather-details',
  templateUrl: './hourly-weather-details.component.html',
  styleUrls: ['./hourly-weather-details.component.scss']
})
export class HourlyWeatherDetailsComponent  {
  @Input() hourlyData: IHourlyForecast;
  @Input() currentIndex: number;

  constructor(private calcService: CalcService) {}

  toCelsius(kelvin) {
    return this.calcService.toCelsius(kelvin);
  }

  getLTime(dateObj) {
    return this.calcService.getTime(dateObj);
  }
  getLDate(dateObj) {
    return this.calcService.getDate(dateObj);
  }
  getDirection(deg) {
    return this.calcService.getDirection(deg);
  }
}
