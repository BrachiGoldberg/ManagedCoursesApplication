import { Component } from '@angular/core';
import { COURSES, Course } from '../course.model';
import { Router } from '@angular/router';
import { USERS } from '../../user/user.model';
import { CourseService } from '../course.service';
import { CATEGORIES, Category } from '../category.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  courses: Course[] = COURSES;
  coursesToDisplay: Course[] = COURSES;
  isLecturer: boolean = false;
  userId: number | undefined;

  nameFilter: string | undefined;
  categoryIdFilter: number | undefined;
  learningWayFilter: number | undefined;
  categories: Category[] = CATEGORIES;

  constructor(private _router: Router, private _service: CourseService) { }
  ngOnInit() {
    const isLecturer = sessionStorage.getItem('isLecturer');
    if (isLecturer != undefined && isLecturer == 'true')
      this.isLecturer = true;
    const userId = sessionStorage.getItem('user');
    if (userId != undefined)
      this.userId = +userId;
    else this._router.navigate(['error'])
  }


  addCourse() {
    this._router.navigate(['courses/add-course']);
  }

  getLecturerName(lecturerId: number) {
    let lecturer = USERS.filter(u => u.isLecturer && u.id == lecturerId);
    if (lecturer.length > 0)
      return lecturer[0].name;
    this._router.navigate(['error']);
    return null;
  }

  getLearningWay(way: number) {
    return way == 0 ? 'Frontal' : 'Zoom';
  }

  deleteCourse(id: number) {
    if (this._service.deleteCourse(id)) {
      alert("delete success");
    }
    else alert("error");
  }

  updateCourse(id: number) {
    this._router.navigate([`courses/course/${id}/update`]);
  }

  showDetails(id: number) {
    this._router.navigate(['courses/course', id]);
  }

  filter() {
    console.log(this.nameFilter, this.categoryIdFilter, this.learningWayFilter);
    // debugger
    this.coursesToDisplay = this.courses.filter(c =>
      this.categoryIdFilter == undefined || c.categoryId == +this.categoryIdFilter
      &&
      this.nameFilter == undefined || this.nameFilter == "" || c.name == this.nameFilter
      &&
      this.learningWayFilter == undefined || c.learningWay == +this.learningWayFilter!
    );
    console.log(this.coursesToDisplay);
  }

  canelFilter() {
    this.nameFilter = undefined;
    this.learningWayFilter = undefined;
    this.categoryIdFilter = undefined;
  }
}
