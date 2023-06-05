import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { Error404Component } from './pages/error404/error404.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { TopBarComponent } from './panel/top-bar/top-bar.component';
import { LeftBarComponent } from './panel/left-bar/left-bar.component';
import { AdminPanelComponent } from './panel/adminPanel/admin-panel/admin-panel.component';
import { GroupComponent } from './pages/Admin/AdminGroup/group/group.component';
import {MatTableModule} from "@angular/material/table";
import { LogOutComponent } from './component/log-out/log-out.component';
import { MenuComponent } from './panel/menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import { GroupFinestComponent } from './pages/Admin/AdminGroup/group-finest/group-finest.component';
import { AcessAdminComponent } from './panel/adminPanel/acess-admin/acess-admin.component';
import { MenuGroupAdminComponent } from './pages/Admin/AdminGroup/menu-group-admin/menu-group-admin.component';
import { UpdateUserComponent } from './pages/Admin/AdminGroup/update-user/update-user.component';
import {MatListModule} from "@angular/material/list";
import { UpdateUserPipe } from './pipe/update-user.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AddUserComponent } from './pages/Admin/AdminGroup/AddingUser/add-user/add-user.component';
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AcessAddingUserComponent } from './pages/Admin/AdminGroup/AddingUser/acess-adding-user/acess-adding-user.component';
import { DialogDeleteUserComponent } from './pages/Admin/AdminGroup/deleteUser/dialog-delete-user/dialog-delete-user.component';
import { MenuUtilisateurComponent } from './pages/Admin/AdminUtilisateur/menu-utilisateur/menu-utilisateur.component';
import { AccessDeleteUserComponent } from './pages/Admin/AdminGroup/deleteUser/access-delete-user/access-delete-user.component';
import { AllUtilisateurComponent } from './pages/Admin/AdminUtilisateur/all-utilisateur/all-utilisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Error404Component,
    ChangePasswordComponent,
    TopBarComponent,
    LeftBarComponent,
    AdminPanelComponent,
    GroupComponent,
    LogOutComponent,
    MenuComponent,
    GroupFinestComponent,
    AcessAdminComponent,
    MenuGroupAdminComponent,
    UpdateUserComponent,
    UpdateUserPipe,
    AddUserComponent,
    AcessAddingUserComponent,
    DialogDeleteUserComponent,
    MenuUtilisateurComponent,
    AccessDeleteUserComponent,
    AllUtilisateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
