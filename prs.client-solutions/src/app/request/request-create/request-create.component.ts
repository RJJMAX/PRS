import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/classes/request.class';
import { RequestService } from '../request.service';
import { User } from 'src/app/classes/user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  request: Request = new Request();
  user!: User;

  pageTitle = "New Request";
  
  constructor(
    private reqSvc: RequestService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  save(): void {
    this.request.userId = Number(this.request.userId);
    this.reqSvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request Created!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    if(this.sysSvc.loggedInUser !== null) {
      this.request.userId = this.sysSvc.loggedInUser?.id;
    }
  }
}