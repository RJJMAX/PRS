import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  pageTitle = "User Login";
  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router
  ) {}

  login(): void {
    this.userSvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("Login Successful!");
        this.sysSvc.loggedInUser = res;
        this.router.navigateByUrl("/front/page");
      },
      error: (err) => {
        console.error(err);
        this.message = "Invalid Username or Password";
      }
    });
  }

  ngOnInit(): void {
    this.sysSvc.loggedInUser = null;
  }

}
