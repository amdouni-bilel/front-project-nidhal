import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {HomeComponent} from './modules/home/home.component';
import {PostsComponent} from './modules/posts/posts.component';
import {AddUserComponent} from './modules/users/add-user/add-user.component';
import {ListUserComponent} from './modules/users/list-user/list-user.component';
import {LoginComponent} from "./modules/auth/login/login.component";
import {ProfileComponent} from "./modules/users/profile/profile.component";
import {EditUserComponent} from "./modules/users/edit-user/edit-user.component";
import {NewComponentComponent} from "./modules/new-component/new-component.component";

const routes: Routes = [
  {path : 'login' , component : LoginComponent  },
//  {path : '' , component : LoginComponent    },
  {path : 'profile' , component : ProfileComponent},
 // {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: '', component: DefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'posts',
        component: PostsComponent

      },
      {
        path: 'users/list-user',
        component: ListUserComponent

      },

      {
        path: 'add-user',
        component: AddUserComponent

      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent

      },
      {
        path: 'nidhal',
        component: NewComponentComponent

      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
