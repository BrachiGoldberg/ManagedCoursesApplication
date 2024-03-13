import { Component } from '@angular/core';
import { Course } from '../course.model';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {

  courses!: Course[];
  coursesToDisplay!: Course[];
  isLecturer: boolean = false;
  userId: number | undefined;

  nameFilter: string | undefined;
  categoryIdFilter: number | undefined;
  learningWayFilter: number | undefined;
  categories: Category[] | undefined;

  constructor(private _router: Router, private _service: CourseService) { }

  ngOnInit() {
    const isLecturer = sessionStorage.getItem('isLecturer');
    if (isLecturer != undefined && isLecturer == 'true')
      this.isLecturer = true;
    const userId = sessionStorage.getItem('user');
    if (userId != undefined)
      this.userId = +userId;
    else this._router.navigate(['error']);
    this.getAllCourses();
    this._service.getAllCategories().subscribe(data => {
      this.categories = data;
    }, () => {
      this._router.navigate(['error']);
    })
  }

  getAllCourses() {
    this._service.getAllCourses().subscribe(data => {
      this.courses = data;
      this.coursesToDisplay = data;
    }, () => {
      this._router.navigate(['error']);
    });
  }

  addCourse() {
    this._router.navigate(['courses/add-course']);
  }

  deleteCourse(id: number) {
    this._service.deleteCourse(id).subscribe(data => {
      this.getAllCourses();
    }, () => {
      this._router.navigate(['error']);
    });
  }

  updateCourse(id: number) {
    this._router.navigate([`courses/course/${id}/update`]);
  }

  showDetails(id: number) {
    this._router.navigate(['courses/course', id]);
  }

  filter() {
    this.coursesToDisplay = this.courses.filter(c =>
      this.learningWayFilter == undefined || c.learningWay == +this.learningWayFilter
    );
    this.coursesToDisplay = this.coursesToDisplay.filter(c =>
      this.categoryIdFilter == undefined || c.categoryId == +this.categoryIdFilter
    );
    this.coursesToDisplay = this.coursesToDisplay.filter(c =>
      this.nameFilter == undefined || c.name?.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  cancelFilter() {
    this.nameFilter = undefined;
    this.learningWayFilter = undefined;
    this.categoryIdFilter = undefined;
    this.filter();
  }
}
