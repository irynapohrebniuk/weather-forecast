import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError  } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  
  constructor(private http: HttpClient) { }

    getData(location)  {
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=ce62364fe4e72ef606baac38762b070c').pipe(catchError(this.handleError));
    }

    getHourlyData(location)  {
      return this.http.get('https://api.openweathermap.org/data/2.5/forecast/?q=' + location + '&appid=ce62364fe4e72ef606baac38762b070c').pipe(catchError(this.handleError));
    }

    handleError() {
      console.error('not found')
      return throwError("error has occured");
    }

}
