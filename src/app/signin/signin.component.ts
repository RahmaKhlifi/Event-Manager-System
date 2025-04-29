import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password : string = '';
  
  constructor(private authserv : AuthService ,private router : Router) { }
  login(){
    console.log("yekhdem");
    let test = this.authserv.login(this.email , this.password);
    if (test == true){
      this.router.navigateByUrl('/home');      
  }
}
}