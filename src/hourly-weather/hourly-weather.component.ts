import { Component, Input } from '@angular/core';
import { AppComponent } from '../app/app.component'
import { IHourlyForecast } from 'src/interfaces/hourly-forecast.inteface';
import { Utilities } from '../utilities'
import { CalcService } from 'src/services/calc-service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent {

  @Input() location: AppComponent;
  @Input() hourlyData: IHourlyForecast;

  constructor(private calcService: CalcService) { }

  count = 40;
  days = [...new Array(this.count)].fill(this.count);
  currentIndex = 0;

  toCelcius(kelvin) {
    return this.calcService.toCelsius(kelvin);
  }

  getLTime(dateObj) {
    return this.calcService.getTime(dateObj);
  }

  handleClick(index) {
    this.currentIndex = index;
  }

  handlePrev() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
    }
    document.getElementById('scroll').scrollLeft -= 100;

  }
  handleNext() {
    if (this.currentIndex < this.days.length - 1) {
      this.currentIndex = this.currentIndex + 1;
    }
    document.getElementById('scroll').scrollLeft += 100;
  }

}
