import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

const routes: Routes = [
  {path: "", redirectTo: "user/list", pathMatch: "full"},
  {path: "core/home", component: HomeComponent},
  {path: "core/about", component: AboutComponent},
  
  {path: "user/list", component:UserListComponent},
  {path: "user/edit/:id", component:UserEditComponent},
  {path: "user/detail/:id", component:UserDetailComponent},
  {path: "user/create", component:UserCreateComponent},
  {path: "user/login", component:UserLoginComponent},
  {path: "vendor/list", component:VendorListComponent},
  {path: "vendor/detail/:id", component:VendorDetailComponent},
  {path: "vendor/edit/:id", component:VendorEditComponent},
  {path: "vendor/create", component:VendorCreateComponent},

  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
