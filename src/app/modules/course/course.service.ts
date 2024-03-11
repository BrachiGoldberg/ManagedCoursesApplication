import { Injectable } from '@angular/core';
import { COURSES, Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getCourseById(id: number | undefined) {
    if (id != undefined)
      return COURSES.filter(c => c.id == id);
    return null;
  }

  addNewCourse(newCourse: Course | undefined) {
    if (newCourse != undefined)
      console.log("I added this course to the list, thank you", newCourse);
  }

  updateCourse(courseId: number | undefined, course: Course | undefined) {
    let myCourse = COURSES.find(c => c.id == courseId);
    if (myCourse != undefined) {
      myCourse.categoryId = course?.categoryId;
      myCourse.name = course?.name;
      myCourse.duration = course?.duration;
      myCourse.image = course?.image;
      myCourse.startDate = course?.startDate;
      myCourse.syllabus = course?.syllabus;
    }
    console.log("I update this course: ", myCourse);
  }

  
  deleteCourse(id: number | undefined) {
    if (id != undefined) {
      const myCourse = COURSES.findIndex(c => c.id == id);
      if (myCourse != undefined) {
        COURSES.splice(myCourse, 1);
        return true;
      }
    }
    return false;
  }
}
