import { Component } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = new User();

  constructor(private _activateRoute: ActivatedRoute, private _service: UserService, private _router: Router) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(data => {
      let name = data['name'];
      if (name != undefined)
        this.user.name = name;
    })
  }

  register() {
    this._service.register(this.user).subscribe(data => {
      sessionStorage.setItem('user', data.id!.toString());
      sessionStorage.removeItem('isLecturer');
      this._router.navigate(['/courses']);
    }, () => {
      this._router.navigate(['/error']);
    })
  }
}
