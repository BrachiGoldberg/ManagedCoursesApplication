import { Component, Input } from '@angular/core';
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
    console.log("register function", this.user);
    if (this._service.register(this.user)) {
      alert("you register succesfull");
      this._router.navigate(['courses']);
    }
    else alert("error acourde, please try again");
  }
}
