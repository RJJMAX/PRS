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
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestItemComponent } from './request/request-item/request-item.component';
import { RequestLineComponent } from './request/request-line/request-line.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { FrontPageComponent } from './menu/front-page/front-page.component';


const routes: Routes = [
  {path: "", redirectTo: "user/login", pathMatch: "full"},
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
  {path: "product/list", component:ProductListComponent},
  {path: "product/detail/:id", component:ProductDetailComponent},
  {path: "product/edit/:id", component:ProductEditComponent},
  {path: "product/create", component:ProductCreateComponent},
  {path: "request/list", component:RequestListComponent},
  {path: "request/line/:id", component:RequestLineComponent},
  {path: "request/detail/:id", component:RequestDetailComponent},
  {path: "request/edit/:id", component:RequestEditComponent},
  {path: "request/item/:id", component:RequestItemComponent},
  {path: "request/create", component:RequestCreateComponent},
  {path: "request/review", component:RequestReviewComponent},
  {path: "requestline/create/:id", component:RequestlineCreateComponent},
  {path: "requestline/edit/:id", component:RequestlineEditComponent},
  {path: "about/aboutme", component:AboutmeComponent},
  {path: "front/page", component:FrontPageComponent},

  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
