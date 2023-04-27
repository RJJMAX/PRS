import { Component } from '@angular/core';
import { User } from 'src/app/classes/user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user!: User;
  pageTitle = "User Detail";
  showVerifyRemove: boolean = false;

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.userSvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("Employee Removed!", res);
        this.router.navigateByUrl("user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  ngOnInit(): void{
    let id = Number(this.route.snapshot.params["id"]);
    this.userSvc.get(id).subscribe({
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
