import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginUserDetails={email:"",password:""};

  constructor(private _auth:AuthService, private router:Router) { }
loginUser(){
  
  this._auth.loginUser(this.loginUserDetails)
  .subscribe(
  res=>{
    //console.log(res); 
   this.router.navigate(['/joblist']);
  },
  err=>console.log(err))
}
  ngOnInit(): void {
  }

}
