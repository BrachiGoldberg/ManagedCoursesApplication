import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { AddCourseComponent } from "./add-course/add-course.component";

const courseRoutes: Route[] = [
    {path: "", redirectTo: "all-courses", pathMatch: 'full'},
    {path: "all-courses", component: CoursesListComponent},
    {path: "course/:id", component: CourseDetailsComponent, pathMatch: 'full'},
    {path: "add-course", component: AddCourseComponent},
    {path: "course/:id/update", component: AddCourseComponent}
]
@NgModule({
    imports: [RouterModule.forChild(courseRoutes)],
    exports: [RouterModule]
})
export class CourseRoutingModule{

}