import { Component, Input } from '@angular/core';
import { AppComponent } from '../app/app.component'
import { IDailyForecast } from 'src/interfaces/daily-forecast.inteface';
import { Utilities } from '../utilities'

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent  {
  @Input() location: AppComponent;
  @Input() dailyData: IDailyForecast;
  
  count = 7;
  days = [...new Array(this.count)].fill(this.count);

  getCelcius(kelvin) {
    return Utilities.calculate(kelvin);
  }

}
