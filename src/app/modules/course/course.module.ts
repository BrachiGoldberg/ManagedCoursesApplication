import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseService } from './course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CoursesListComponent, CourseDetailsComponent, AddCourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CourseService]
})
export class CourseModule { }
