import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: User[] = [];

  get users() {
    return this._users.map(user => ({...user}));
  }

  constructor(
    private api: ApiService
  ) {
  }

  getUsers() {
    this.api.get<User[]>('users').subscribe( users => {
      this._users = users;
      console.log(users);
    })
  }

  updateUser(id: number, userUpdate: Partial<User>) {
    console.log(userUpdate)
    this._users = this._users.map( user => {
      if (user.id === id) {
        return ({...user, ...userUpdate})
      } else {
        return user;
      }
    })
  }
}
