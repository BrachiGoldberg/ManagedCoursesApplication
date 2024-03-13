import { Component } from '@angular/core';
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

  constructor(private _activateRoute: ActivatedRoute, private _router: Router, private _service: UserService) { }

  ngOnInit() {
    this._activateRoute.url.subscribe(url =>
      url[0].path == 'lecturer-login' ? this.isLecturerEnter = true : this.isLecturerEnter = false);
  }

  login() {
    this._service.login(this.name, this.password, this.courseName).subscribe(data => {
      sessionStorage.setItem('user', data.id!.toString());
      if (data.isLecturer && this.courseName != undefined)
      sessionStorage.setItem('isLecturer', 'true');
      else
      sessionStorage.removeItem('isLecturer');
      this._router.navigate(['courses']);
      console.log("ser")
    }, error => {
      if (error.status == 401)
        this._router.navigate(['/user/register']);
      else
        this._router.navigate(['/error']);
    });
  }

  goToRegister() {
    this._router.navigate(["user/register"], { queryParams: { 'name': this.name } })
  }
}
