import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLecturerEnter: boolean = false;
  name: string | undefined;
  password: string | undefined;
  courseName: string | undefined;

  constructor(private _activateRoute: ActivatedRoute, private _router: Router, private _service: UserService) {
    console.log("login component");
  }

  ngOnInit() {
    this._activateRoute.url.subscribe(url =>
      url[0].path == 'lecturer-login' ? this.isLecturerEnter = true : this.isLecturerEnter = false);
  }

  login() {
    console.log(this.name, this.password, this.courseName);
    if (this._service.login(this.name, this.password, this.courseName)) {
      alert("you login succesfull");
      this._router.navigate(['courses'])
    }
    else this.goToRegister();
  }

  goToRegister() {
    this._router.navigate(["user/register"], { queryParams: { 'name': this.name } })
  }
}
