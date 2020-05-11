import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IWeather } from '../interfaces/weather.inteface';
import { IDailyForecast } from '../interfaces/daily-forecast.inteface';
import { Utilities } from '../utilities'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'weather-forecast';
  location = '';

  data: IWeather  = null;
  dailyData: IDailyForecast = null;

  getCelcius(kelvin) {
    return Utilities.calculate(kelvin);
  }

  parseTime(timestamp) {
    console.log("timestamp", timestamp);
    const dateObject = new Date(timestamp*1000);
    let options = { hour12: false};
    return dateObject.toLocaleTimeString([], options)
  }

  handleSearch() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.location+"&APPID=ce62364fe4e72ef606baac38762b070c")
      .then(res => res.json())
      .then(data => {
        console.log({data});
        this.data = data;
      })
      fetch("https://api.openweathermap.org/data/2.5/forecast/?q="+this.location+"&appid=ce62364fe4e72ef606baac38762b070c")
    .then(res => res.json())
    .then(dailyData => {
      console.log({dailyData});
      this.dailyData = dailyData;
      console.log("daily", dailyData.list[0])
    })
  }
  
}
