import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  menus: Menu[] = [
    new Menu("Home", "/user"),
    new Menu("Login", "/user/login"),
    new Menu("Orders", "/orders/list"),
    new Menu("About", "/about"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list")
  ]
}
