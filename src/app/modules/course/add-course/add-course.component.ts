import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course, LearningWay } from '../course.model';
import { CATEGORIES, Category } from '../category.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  courseId: number | undefined;
  course!: Course ;
  categories: Category[] = CATEGORIES;
  userId!: number;
  courseForm!: FormGroup;
  constructor(private _serivice: CourseService, private _activate: ActivatedRoute,
    private _fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    let userId = sessionStorage.getItem('user');
    if (userId != undefined)
      this.userId = +userId;
    else {
      //error!!!
      this._router.navigate(['error']);
    }
    this._activate.params.subscribe(params => {
      const id = params['id'];
      if (id != undefined)
        this.courseId = id;

    })
    if (this.courseId != undefined) {
      let myCourse = this._serivice.getCourseById(this.courseId);
      this.course = myCourse!;
    }
    else {
      this.course = new Course();
      this.course.categoryId = 1;
      this.course.learningWay = LearningWay.Frontal;
    }
    this.courseForm = this._fb.group({
      "name": new FormControl(this.course.name, [Validators.required]),
      "duration": new FormControl(this.course.duration, [Validators.required]),
      "image": new FormControl(this.course.image, [Validators.required]),
      "learningWay": new FormControl(this.course.learningWay?.toString(), [Validators.required]),
      "startDate": new FormControl(this.course.startDate, [Validators.required]),
      "categoryId": new FormControl(this.course.categoryId, [Validators.required]),
      "syllabus": this._fb.array([])
    });

    this.course.syllabus?.forEach(s => this.syllabusArray.push(this._fb.control(s)));
  }

  get syllabusArray(): FormArray {
    return this.courseForm.get('syllabus') as FormArray;
  }

  getSyllabusControl(index: number) {
    return this.syllabusArray.at(index) as FormControl;
  }

  addSyllabus() {
    this.syllabusArray.push(this._fb.control(''));
  }

  removeSyllabus(index: number) {
    this.syllabusArray.removeAt(index);
  }

  checkIsFullField(index: number) {
    let syllsbusItem = this.getSyllabusControl(index);
    if (syllsbusItem.value != "")
      this.addSyllabus();
    else
      this.removeSyllabus(index);
    console.log(syllsbusItem);
  }

  submitForm() {
    if (this.courseForm.valid) {
      console.log(this.syllabusArray)
      this.syllabusArray.controls.forEach((c, i) => {
        if (c.value == "")
          this.removeSyllabus(i);
      });

      this.course = {
        ...this.courseForm.value, lecturerId: this.userId,
        learningWay: +this.courseForm.value.learningWay, duration: +this.courseForm.value.duration
      };
      console.log(this.course);
      if (this.courseId == undefined) {//new course
        this._serivice.addNewCourse(this.course);
      }
      else {
        this._serivice.updateCourse(this.courseId, this.course);
      }
      this._router.navigate(['courses/all-courses']);
    }
    else alert("you have missing fields");
  }

  cancel(){
    alert("your details aren't saved, Do you sure?");
    this._router.navigate(['courses']);
  }
}
