import { Component, OnInit, Input} from '@angular/core';
import { Weather } from './weather';
//import { WEATHER_LIST } from './weather.data';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather-list',
  //template: `<weather-item *ngFor="let weather of weathers" [item]="weather"></>`,
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  //@Input('city') cityName: String;
  @Input('WeatherForecastList') weathers: any;
  errorMessage: string;
 // weathers: any[];

  constructor(private _weatherService: WeatherService){
    //console.log(city);
  }

  ngOnInit():any {

  }

}
