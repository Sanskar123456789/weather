import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'weather-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private router: Router
    ){

    }

  name = '';
  email = '';
  address = '';
  
  onsubmit = () => {
    let valid = true;
    if(this.name===''){
      valid = false;
    }
    else if(this.email===''){
      valid = false;
    }
    else if(this.address===''){
      valid = false;
    }

    if(valid){
      
      localStorage.setItem('name', this.name);
      localStorage.setItem('email', this.email);
      localStorage.setItem('address', this.address);
      if(localStorage.getItem('address')){
        this.router.navigate(['/dashboard']);
      }
    }else{
      alert("please fill all the fields");
    }
    
    
  }

}
