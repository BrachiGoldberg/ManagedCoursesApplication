import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {path: "", redirectTo: "home", pathMatch: 'full'},
    // {path: "home", component: AppComponent},
    {path: "user", loadChildren: ()=>import('./modules/user/user.module').then(m=>m.UserModule)},
    {path: "courses", loadChildren: ()=>import('./modules/course/course.module').then(m=>m.CourseModule)}
];
