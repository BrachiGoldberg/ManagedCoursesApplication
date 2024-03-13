import { Component } from '@angular/core';
import { Course } from '../course.model';
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
  lecturerName: string | undefined;

  constructor(private _service: CourseService, private _activate: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activate.params.subscribe(params => {
      let id = params['id'];
      if (id != undefined)
        this.courseId = id;
      this._service.getCourseById(this.courseId).subscribe(data => {
        this.course = data;
        this.getLecturerName();
        this.getCategory();
      }, error => {
        this._router.navigate(['error']);
      });
    });

    const id = sessionStorage.getItem('user');
    if (id != undefined)
      this.userId = +id;
  }


  getCategory() {
    this._service.getCategory(this.course?.categoryId).subscribe(data => {
      this.category = data;
    }, error => {
      this._router.navigate(['error'])
    });
  }

  isClose() {
    const a = new Date(this.course?.startDate!);
    const b = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    if (a != undefined) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      const difference = Math.floor((utc2 - utc1) / _MS_PER_DAY);
      if (difference <= 7)
        return true;
    }
    return false;
  }

  updateCourse() {
    this._router.navigate([`courses/course/${this.course?.id}/update`]);
  }

  deleteCourse() {
    this._service.deleteCourse(this.course?.id).subscribe(data => {
      this._router.navigate(['/courses']);
    }, error => {
      this._router.navigate(['/error'])
    });
  }

  getLecturerName() {
    this._service.getLecturerName(this.course?.lecturerId!).subscribe(data => {
      this.lecturerName = data;
    }, error => {
      this._router.navigate(['/error'])
    });
  }
}
