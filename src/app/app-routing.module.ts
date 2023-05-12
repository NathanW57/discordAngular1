import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UserGuard} from "./guards/user.guard";
import {Error404Component} from "./pages/error404/error404.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";

const routes: Routes = [
  {path:"login",component : LoginComponent},
  {path:"home",component : HomeComponent,canActivate : [UserGuard]},
  {path: "forgotPassword",component : ChangePasswordComponent},
  {path : "",redirectTo: "login",pathMatch : "full"},
  {path:"**",component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
