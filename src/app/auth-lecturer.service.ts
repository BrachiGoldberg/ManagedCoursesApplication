import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLecturerService implements CanActivate {

  canActivate(): boolean {
    const lecturer = localStorage.getItem('isLecturer');
    if (lecturer == undefined)
      return false;
    return true;
  }
  constructor() { }
}
