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
import { AdminPanelComponent } from './panel/admin-panel/admin-panel.component';
import { GroupComponent } from './pages/group/group.component';
import {MatTableModule} from "@angular/material/table";
import { LogOutComponent } from './component/log-out/log-out.component';
import { MenuComponent } from './pages/menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";


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
    MenuComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
