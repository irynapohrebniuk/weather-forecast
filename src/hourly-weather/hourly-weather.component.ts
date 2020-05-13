import { Component, Input } from '@angular/core';
import { AppComponent } from '../app/app.component'
import { IHourlyForecast } from 'src/interfaces/hourly-forecast.inteface';
import { Utilities } from '../utilities'

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent {

  @Input() location: AppComponent;
  @Input() hourlyData: IHourlyForecast;
  
  count = 5;
  days = [...new Array(this.count)].fill(this.count);
  currentIndex = 0;

  getCelcius(kelvin) {
    return Utilities.calculate(kelvin);
  }

  handleClick(index) {
    this.currentIndex = index;
  }

  handlePrev() {
    console.log(this.currentIndex);
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
    }
    
  }
  handleNext() {
    console.log(this.currentIndex);
    if (this.currentIndex < this.days.length -1 ) {
      this.currentIndex = this.currentIndex + 1;
    }
  }

}
