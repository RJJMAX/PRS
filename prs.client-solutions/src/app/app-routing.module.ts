import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

const routes: Routes = [
  {path: "", redirectTo: "user/list", pathMatch: "full"},
  {path: "core/home", component: HomeComponent},
  {path: "core/about", component: AboutComponent},
  
  {path: "user/list", component:UserListComponent},
  {path: "user/edit/:id", component:UserEditComponent},
  {path: "user/detail/:id", component:UserDetailComponent},
  {path: "user/create", component:UserCreateComponent},

  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
