import {IWeather} from './weather.inteface'

export declare interface IDailyForecast {
    city: {
        id: number;
        name: string;
        country: string;
    },
    cnt: number,
    cod: number,
    list: Array<IWeather>
}
