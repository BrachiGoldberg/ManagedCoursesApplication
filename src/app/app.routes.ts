import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "user", loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
    {
        path: "courses", loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule),
        canActivate: [AuthGuardService]
    },
    {path: "**", component: ErrorPageComponent}
];
