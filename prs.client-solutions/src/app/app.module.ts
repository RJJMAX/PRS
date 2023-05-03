import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenubarComponent } from './menu/menubar/menubar.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { SortPipe } from './core/sort.pipe';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { SearchPipe } from './user/search.pipe';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestLineComponent } from './request/request-line/request-line.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestItemComponent } from './request/request-item/request-item.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { BoolPipe } from './pipes/bool.pipe';
import { PasswordPipe } from './pipes/password.pipe';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { FrontPageComponent } from './menu/front-page/front-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenubarComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    SortPipe,
    UserLoginComponent,
    SearchPipe,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorListComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestReviewComponent,
    RequestLineComponent,
    RequestListComponent,
    RequestItemComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    BoolPipe,
    PasswordPipe,
    AboutmeComponent,
    FrontPageComponent,

  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
