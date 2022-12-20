import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'weather-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  address = localStorage.getItem('address')
  data: any;
  
  constructor(private api:ApiService,private router:Router){
    console.log(this.address)
    if(this.address){
      console.log(this.address)
      this.api.getWeather(this.address).pipe().subscribe(data => {
        this.data = data;
        console.log(this.data)
      })
    }
  }


  logout=()=>{
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
