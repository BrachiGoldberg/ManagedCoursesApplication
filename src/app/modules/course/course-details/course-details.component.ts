import { Component, Input } from '@angular/core';
import { Course } from '../course.model';
import { USERS } from '../../user/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {


  course: Course | undefined;
  courseId: number | undefined;
  category: Category | undefined;
  userId: number | undefined;
  constructor(private _service: CourseService, private _activate: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activate.params.subscribe(params => {
      let id = params['id'];
      console.log("id", id);
      if (id != undefined)
        this.courseId = id;
      this.course = this._service.getCourseById(this.courseId);
      console.log(this.course);
    });

    const category = this._service.getCategory(this.course?.categoryId);
    if (category != undefined)
      this.category = category;

    const id = sessionStorage.getItem('user');
    if (id != undefined)
      this.userId = +id;
  }

  isClose() {
    const a = this.course?.startDate;
    const b = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a!.getFullYear(), a!.getMonth(), a!.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    const difference = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    if (difference <= 7)
      return true;
    else
      return false;
  }

  updateCourse() {
    console.log("update")
    this._router.navigate([`courses/course/${this.course?.id}/update`]);
  }

  deleteCourse() {
    if (this._service.deleteCourse(this.course?.id)) {
      alert("delete success");
    }
    else alert("error");
  }
}
