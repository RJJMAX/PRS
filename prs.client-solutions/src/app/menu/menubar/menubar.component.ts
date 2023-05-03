import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  menus: Menu[] = [
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("Reviews", "/request/review"),
    new Menu("About", "/about/aboutme"),
    new Menu("Login", "/user/login")
  ]
}
