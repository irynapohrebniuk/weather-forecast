import {IWeather} from './weather.inteface'

export declare interface IHourlyForecast {
    city: {
        id: number;
        name: string;
        country: string;
    },
    cnt: number,
    cod: number,
    list: Array<IWeather>
}
