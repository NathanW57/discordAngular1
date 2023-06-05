import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UserGuard} from "./guards/user.guard";
import {Error404Component} from "./pages/error404/error404.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import {GroupComponent} from "./pages/Admin/AdminGroup/group/group.component";
import {LogOutComponent} from "./component/log-out/log-out.component";
import {GroupFinestComponent} from "./pages/Admin/AdminGroup/group-finest/group-finest.component";
import {AcessAdminComponent} from "./panel/adminPanel/acess-admin/acess-admin.component";
import {AuthentificationGuard} from "./guards/authentification.guard";
import {AdminPanelComponent} from "./panel/adminPanel/admin-panel/admin-panel.component";
import {AdminGuard} from "./guards/admin.guard";
import {UpdateUserComponent} from "./pages/Admin/AdminGroup/update-user/update-user.component";
import {AddUserComponent} from "./pages/Admin/AdminGroup/AddingUser/add-user/add-user.component";
import {
  AcessAddingUserComponent
} from "./pages/Admin/AdminGroup/AddingUser/acess-adding-user/acess-adding-user.component";
import {AllUtilisateurComponent} from "./pages/Admin/AdminUtilisateur/all-utilisateur/all-utilisateur.component";

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
    canActivate:[AdminGuard],
    children : [
      {
        path : "users",
        component : AllUtilisateurComponent
      },
      {
        path: 'group',
        component : GroupComponent,
        children : [
          {
            path: ':id',
            component : GroupFinestComponent,
            children : [
              {
                path : 'userUpdate',
                component : UpdateUserComponent
              },
              {
                path : 'accessAddUser',
                component : AcessAddingUserComponent,
                children : [
                  {
                    path : 'adduser',
                    component : AddUserComponent
                  }
                ]
              }
            ]
          }
        ]

      }
    ]
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
