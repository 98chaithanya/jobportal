import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _addjobUrl="http://localhost:3000/api/admin/add";
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  registerUser(user: { email: string; password: string; }){
    return this.http.post(this._registerUrl,user)
  }
 loginUser(user: { email: string; password: string; }){
    return this.http.post(this._loginUrl,user)
  }
  addJob(admin:{}){
    return this.http.post(this._addjobUrl,admin)
    
  }
}
