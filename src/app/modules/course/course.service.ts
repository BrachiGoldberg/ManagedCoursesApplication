import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseApi: string = 'https://localhost:7218';

  constructor(private _http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(`${this.baseApi}/courses/all-courses`);
  }

  getCourseById(id: number | undefined): Observable<Course> {
    return this._http.get<Course>(`${this.baseApi}/courses/${id}`);
  }

  getLecturerName(id: number): Observable<string> {
    return this._http.get<string>(`${this.baseApi}/lecturer/${id}`);
  }

  addNewCourse(newCourse: Course | undefined) {
    return this._http.post<Course>(`${this.baseApi}/courses/add-course`, newCourse);
  }

  updateCourse(courseId: number | undefined, course: Course | undefined): Observable<Course> {
    return this._http.put<Course>(`${this.baseApi}/courses/course/${courseId}`, course);
  }


  deleteCourse(id: number | undefined): Observable<Course> {
    return this._http.delete<Course>(`${this.baseApi}/courses/course/${id}`);
  }


  getAllCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${this.baseApi}/categories`);
  }

  getCategory(id: number | undefined): Observable<Category> {
    return this._http.get<Category>(`${this.baseApi}/categories/${id}`);
  }
}
