import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";

const userRoutes: Route[] = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "lecturer-login", component: LoginComponent},
    {path: "logout", component: LogoutComponent}
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule{

}