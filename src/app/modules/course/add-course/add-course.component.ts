import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course, LearningWay } from '../course.model';
import { Category } from '../category.model';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import 'animate.css';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  courseId: number | undefined;
  course: Course = new Course();
  categories: Category[] | undefined;
  userId!: number;
  courseForm: FormGroup = this.createForm();

  constructor(private _serivice: CourseService, private _activate: ActivatedRoute,
    private _fb: FormBuilder, private _router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    let userId = sessionStorage.getItem('user');
    if (userId != undefined)
      this.userId = +userId;
    else {
      this._router.navigate(['error']);
    }
    this._activate.params.subscribe(params => {
      const id = params['id'];
      if (id != undefined)
        this.courseId = id;
    });

    if (this.courseId != undefined) {
      this._serivice.getCourseById(this.courseId).subscribe(data => {
        this.course = data;
        this.courseForm = this.createForm();
        this.course?.syllabus?.forEach(s => this.syllabusArray.push(this._fb.control(s)));
        console.log(this.courseForm.value)
      }, error => {
        this._router.navigate(['error']);
      });
    }
    else {
      this.course.categoryId = 1;
      this.course.learningWay = LearningWay.Frontal;
      this.course?.syllabus?.forEach(s => this.syllabusArray.push(this._fb.control(s)));
    }

    this.getAllCategories();
  }

  getAllCategories() {
    this._serivice.getAllCategories().subscribe(data => {
      this.categories = data;
    }, error => {
      this._router.navigate(['error']);
    });
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

  createForm(): FormGroup {
    return this._fb.group({
      "name": new FormControl(this.course?.name, [Validators.required]),
      "duration": new FormControl(this.course?.duration, [Validators.required]),
      "image": new FormControl(this.course?.image, [Validators.required]),
      "learningWay": new FormControl(this.course?.learningWay?.toString(), [Validators.required]),
      "startDate": new FormControl(this.course?.startDate!, [Validators.required]),
      "categoryId": new FormControl(this.course?.categoryId, [Validators.required]),
      "syllabus": this._fb.array([])
    });;
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
    let status: string = "";
    if (this.courseForm.valid) {
      this.syllabusArray.controls.forEach((c, i) => {
        if (c.value == "")
          this.removeSyllabus(i);
      });
      this.course = {
        ...this.courseForm.value, lecturerId: this.userId, id: this.courseId,
        learningWay: +this.courseForm.value.learningWay, duration: +this.courseForm.value.duration, categoryId: +this.courseForm.value.categoryId
      };
      if (this.courseId == undefined) {//new course
        this._serivice.addNewCourse(this.course).subscribe(data => {
          this.saveSuccess("Add");
        }, error => {
          this._router.navigate(['error']);
        });
      }
      else {
        this._serivice.updateCourse(this.courseId, this.course).subscribe(data => {
          this.saveSuccess("Update");
        }, error => {
          this._router.navigate(['error']);
        });
      }


    }
    else Swal.fire({ text: "You have missing fields", icon: "info", });

  }

  saveSuccess(status: string) {
    Swal.fire({
      title: `You ${status!} your course successfully`,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    }).then(() =>
      this._router.navigate(['courses/all-courses'])
    );
  }

  cancel() {
    Swal.fire({
      title: "Are you sure not save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Oops. I want to return back`
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['courses']);
      }
    });
  }

  addNewCategory() {
    let icon: string, name: string;
    const value1 = Swal.fire({
      title: "Enter your category",
      input: "text",
      inputLabel: "New Category",
      showCancelButton: true,
      showConfirmButton: true,
      inputValidator: value => {
        console.log(value);
      }



    }).then(value => {
      console.log(value.value);
      if (value.value != undefined) {
        name = value.value;
        Swal.fire({
          title: "Enter Icon to the category",
          input: "text",
          inputLabel: "Icon Path",
          showCancelButton: true,
          showConfirmButton: true,
          inputValidator: value => {
            console.log(value);
          }
        }).then(value1 => {
          if (value1.value != undefined) {
            console.log(value1.value, name)
            icon = value1.value;
          }
        }).then(() => {
          const newCategory: Category = { iconPath: icon, id: 0, name: name }
          this._serivice.addNewCategory(newCategory).subscribe(data => {
            this.getAllCategories();
          }, error=>this._router.navigate(['error']));
        });
      }

    });


    // const newCategory: Category = { name: name, id: 0, iconPath: icon }
    // this._serivice.addNewCategory(newCategory);

  }

}
