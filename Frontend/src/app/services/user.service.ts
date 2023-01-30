import { Injectable } from '@angular/core';
import { UserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: UserForRegister) {
    // let users = [];
    // if (localStorage.getItem('Users')) {
    //   users = JSON.parse(localStorage.getItem('Users') as string);
    //   users = [user, ...users];
    // } 
    // else {
    //   users = [user];
    // }
    // localStorage.setItem('Users', JSON.stringify(users));
  }

}
