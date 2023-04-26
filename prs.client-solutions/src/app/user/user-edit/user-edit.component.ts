import { Component } from '@angular/core';
import { User } from 'src/app/classes/user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  user!: User;
  pageTitle = "User Edit";

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.userSvc.edit(this.user).subscribe({
      next: (res) => {
        console.debug("User Changed!");
        this.router.navigateByUrl("user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.userSvc.get(id).subscribe({
      next: (res) => {
        console.debug("User Edited", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
