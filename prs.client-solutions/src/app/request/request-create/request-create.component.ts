import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/classes/request.class';
import { RequestService } from '../request.service';
import { RequestReviewComponent } from '../request-review/request-review.component';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  request: Request = new Request();

  pageTitle = "New Request";
  
  constructor(
    private reqSvc: RequestService,
    private router: Router
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
    if(this.request.userId !== this.request.userId) {
      this.reqSvc.get(this.request.userId).subscribe({
        next: (res) => {
          console.debug("Requests:");
          this.request = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}
