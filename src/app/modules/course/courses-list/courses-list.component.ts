import { Component } from '@angular/core';
import { COURSES, Course } from '../course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  courses: Course[] = COURSES;
  isLecturer: boolean = false;


  constructor(private _router: Router) { }
  ngOnInit() {
    const isLecturer = localStorage.getItem('isLecturer');
    if (isLecturer != undefined && isLecturer == 'true')
      this.isLecturer = true;
  }


  addCourse() {
    this._router.navigate(['courses/add-course']);
  }
}
