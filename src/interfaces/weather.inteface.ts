import {IWeatherDescription} from './weather-description.inteface'

export declare interface IWeather {
    dt: number,
    dt_txt: string,
    name:string,
    wind: {speed: number},
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    sys: {
        sunrise: number,
        sunset: number
    }
    weather: Array<IWeatherDescription>
}
