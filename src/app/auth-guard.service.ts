import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(): boolean {
    const user = sessionStorage.getItem('user');
    if (user != undefined)
      return true;
    return false;
  }

  constructor() { }
}
