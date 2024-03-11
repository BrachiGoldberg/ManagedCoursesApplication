import { Injectable } from '@angular/core';
import { USERS, User } from './user.model';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = USERS;
  constructor() { }

  login(name: string | undefined, password: string | undefined, course: string | undefined) {
    if (name != undefined || password != undefined) {
      const myUser = this.users.filter(u => u.name == name && u.password == password);
      console.log("myUser", myUser);
      if (myUser.length > 0) {
        localStorage.setItem('user', myUser[0].id!.toString());
        if (myUser[0].isLecturer && course != undefined)
          localStorage.setItem('isLecturer', 'true');
        return true;
      }0
    }
    return false;
  }

  register(user: User) {
    console.log("servie user", user);
    USERS.push({ ...user, id: 6 });
    return this.login(user.name, user.password, undefined);
  }
}
