import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Subject} from "rxjs/Subject";
import { Weather } from './weather';

@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
})
export class WeatherSearchComponent implements OnInit {

    errorMessage: string;
    weatherForecastData: any[];
    cityName : string = 'Toronto';
    units : string = 'imperial';
    selected : boolean = true;
    constructor(private _weatherService:WeatherService) {
    }

    ngOnInit() {
        this._weatherService.getWeatherForecast(this.cityName,this.units)
            .subscribe(data => {this.weatherForecastData = data},
                error => this.errorMessage = <any>error,
                );
    }
    onSubmit(cityName: string) {
    // console.log(cityName);
    this.cityName = cityName;
     this._weatherService.getWeatherForecast(cityName,this.units)
         .subscribe(data => {this.weatherForecastData = data}, 
                    error =>  this.errorMessage = <any>error,            
     );
    }
    typeSelected(){
        this.selected = !this.selected;
        this.units = (this.units === 'imperial')?'metric' : 'imperial';
        this._weatherService.getWeatherForecast(this.cityName,this.units)
         .subscribe(data => {this.weatherForecastData = data}, 
                    error =>  this.errorMessage = <any>error,            
        );
    }
    onSearchLocation(cityName:string) {
     console.log(cityName);
    }

}