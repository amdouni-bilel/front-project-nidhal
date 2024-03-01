import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { AddUserComponent } from './modules/users/add-user/add-user.component';
import { ListUserComponent } from './modules/users/list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/auth/login/login.component';
import { LogoutComponent } from './modules/auth/logout/logout.component';
import { ProfileComponent } from './modules/users/profile/profile.component';
import { EditUserComponent } from './modules/users/edit-user/edit-user.component';
import { NewComponentComponent } from './modules/new-component/new-component.component';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    EditUserComponent,
    NewComponentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
