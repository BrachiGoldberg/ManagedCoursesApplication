import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const userRoutes: Route[] = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "lecturer-login", component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule{

}