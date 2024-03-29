import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UserGuard} from "./guards/user.guard";
import {Error404Component} from "./pages/error404/error404.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import {GroupComponent} from "./pages/Admin/AdminGroup/GroupView/group/group.component";
import {GroupFinestComponent} from "./pages/Admin/AdminGroup/GroupView/group-finest/group-finest.component";
import {AuthentificationGuard} from "./guards/authentification.guard";
import {AdminPanelComponent} from "./panel/adminPanel/admin-panel/admin-panel.component";
import {AdminGuard} from "./guards/admin.guard";
import {AllUtilisateurComponent} from "./pages/Admin/AdminUtilisateur/all-utilisateur/all-utilisateur.component";
import {ChatComponent} from "./pages/Chatting/chat/chat.component";
import {ChannelComponent} from "./pages/Admin/AdminChannel/ChannelView/channel/channel.component";
import {ChannelFinestComponent} from "./pages/Admin/AdminChannel/ChannelView/channel-finest/channel-finest.component";

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
  }

  ,
  {
    path:"chat/:id",
    component : ChatComponent,
    canActivate : [UserGuard,AuthentificationGuard]
  }
  ,

  {
    path :"adminPanel",
    component : AdminPanelComponent,
    canActivate:[AdminGuard],
    children : [
      {
        path : "users",
        component : AllUtilisateurComponent,
      },
      {
        path: 'group',
        component : GroupComponent,
        children : [
          {
            path: ':id',
            component : GroupFinestComponent,
              }
            ]
          }
          ,
      {
        path: 'channels',
        component : ChannelComponent,
        children : [
          {
            path: ':id',
            component : ChannelFinestComponent,
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
