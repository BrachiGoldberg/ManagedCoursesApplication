import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private _router: Router) { }

  ngOnInit() {
    Swal.fire({
      title: "Are you sure you want to leave the site?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Have a good day!",
          icon: "success"
        }).then(() =>
          this._router.navigate([''])
        );
      }
    });
  }

  ngOnDestroy() {
    sessionStorage.clear();
  }
}
