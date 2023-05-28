import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UserGuard} from "./guards/user.guard";
import {Error404Component} from "./pages/error404/error404.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import {GroupComponent} from "./pages/group/group.component";
import {LogOutComponent} from "./component/log-out/log-out.component";
import {GroupFinestComponent} from "./pages/group-finest/group-finest.component";
import {AcessAdminComponent} from "./panel/acess-admin/acess-admin.component";
import {AuthentificationGuard} from "./guards/authentification.guard";
import {AdminPanelComponent} from "./panel/admin-panel/admin-panel.component";

const routes: Routes = [

  {
    path:"login",
    component : LoginComponent,
    canActivate: [AuthentificationGuard]
  },
  {
    path:"home",
    component : HomeComponent,
    canActivate : [UserGuard,AuthentificationGuard]
  },

  {
    path :"adminPanel",
    component : AdminPanelComponent,
    canActivate:[UserGuard],
    children : [
      {
        path: 'group',
        component : GroupComponent
      }
    ]
  }
  ,
  {
    path:"groupFinest",
    component:GroupFinestComponent,
    canActivate : [UserGuard]
  },
  {
    path: "forgotPassword",
    component : ChangePasswordComponent
  },
  {
    path : "",redirectTo: "login",
    pathMatch : "full"
  },
  {
    path:"**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
