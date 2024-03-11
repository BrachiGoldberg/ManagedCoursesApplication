import { Component, Input } from '@angular/core';
import { Course } from '../course.model';
import { USERS } from '../../user/user.model';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {


  @Input()
  course!: Course;
  lecturerName: string | undefined;
  learningWay!: string;
  isLecturer: boolean = false;
  userId!: number;

  constructor(private _router: Router, private _service: CourseService) { }

  ngOnInit() {
    let lecturer = USERS.filter(u => u.isLecturer && u.id == this.course.lecturerId);
    if (lecturer.length > 0)
      this.lecturerName = lecturer[0].name;
    else this._router.navigate(['error']);
    this.course.learningWay == 0 ? this.learningWay = 'Frontal' : this.learningWay = 'Zoom';
    const userId = localStorage.getItem('user');
    if (userId != undefined)
      this.userId = +userId;
    else this._router.navigate(['error'])
    const isLecturer = localStorage.getItem('isLecturer');
    if (isLecturer != undefined && isLecturer == 'true')
      this.isLecturer = true;
  }

  deleteCourse() {
    if (this._service.deleteCourse(this.course.id)) {
      alert("delete success");
    }
    else alert("error");
  }

  updateCourse() {
    this._router.navigate([`courses/course/${this.course.id}/update`]);
  }
}
