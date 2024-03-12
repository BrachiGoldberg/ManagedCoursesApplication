import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  providers: [UserService]
})
export class UserModule { }
