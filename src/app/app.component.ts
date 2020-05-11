import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weather-forecast';
  location = '';
  data = null;

  calculate(kelvin) {
    return Math.ceil(kelvin - 272.15);
  }

 handleSearch() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.location+"&APPID=ce62364fe4e72ef606baac38762b070c")
      .then(res => res.json())
      .then(data => {
        console.log({data});
        this.data = data;
      })
  }
}
