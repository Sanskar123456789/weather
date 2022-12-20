import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // apiAccessKey = 'c0935e7a7bf5bc6baff481cdfa12d424'
  getWeather(address:string):Observable<any>{
    return this.http.get<any>(`http://api.weatherapi.com/v1/forecast.json?key=5f8b15fa2eaf4fdf8a485526222012&q=${address}&days=6&aqi=no&alerts=no`);
  }
}
