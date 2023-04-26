import { Component } from '@angular/core';
import { User } from 'src/app/classes/user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
pageTitle = "User List";
user: User[] = [];

constructor(
  private userSvc: UserService,
  private sysSvc: SystemService
) {}

ngOnInit(): void {
  // this.sysSvc.checkLogin();
  // if(this.sysSvc.loggedInUser !== null) {
  //   console.log("User is logged in");
  // } else {
  //   console.log("No one is logged in");
  // }
  this.userSvc.list().subscribe({
    next: (res) => {  
      console.debug("User:", res);
      this.user = res;
    },
    error: (err) => {
      console.error(err);
    }
  });
}
}
