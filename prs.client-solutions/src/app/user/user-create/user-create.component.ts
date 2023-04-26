import { Component } from '@angular/core';
import { User } from 'src/app/classes/user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
user: User = new User();
pageTitle = "Create New User";

constructor(
  private userSvc: UserService,
  private router: Router
) {}

save(): void {
  this.userSvc.create(this.user).subscribe({
    next: (res) => {
      console.debug("User Created!");
      this.router.navigateByUrl("/user/list");
    },
    error: (err) => {
      console.error(err);
    }
  })
}

ngOnInit(): void {
  
}
}
