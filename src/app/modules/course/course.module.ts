import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseService } from './course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowLearningWayIconPipe } from './show-learning-way-icon.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LearningWayStringPipe } from './learning-way-string.pipe';


@NgModule({
  declarations: [CoursesListComponent, CourseDetailsComponent, AddCourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShowLearningWayIconPipe,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    LearningWayStringPipe,
    

  ],
  providers: [CourseService, DatePipe]
})
export class CourseModule { }
