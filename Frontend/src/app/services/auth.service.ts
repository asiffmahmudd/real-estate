import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForLogin, UserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5062';
  constructor(private http: HttpClient) { }

  authUser(user: UserForLogin){
    return this.http.post(this.baseUrl + '/api/account/login', user);
    // let UserArray = [];
    // if (localStorage.getItem('Users')){
    //   UserArray = JSON.parse(localStorage.getItem('Users') || '{}');
    // }
    // return UserArray.find((p:any) => p.userName === user.userName && p.password === user.password);
  }

  registerUser(user: UserForRegister){
    return this.http.post(this.baseUrl + '/api/account/register', user);
  }
}
