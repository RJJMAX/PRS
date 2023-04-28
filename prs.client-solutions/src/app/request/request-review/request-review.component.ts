import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/classes/request.class';
@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
  pageTitle = "Request Review";
  requests: Request[] = [];
  request!: Request;

  constructor(
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  requestId(id: number): void {
    if(this.request.id !== this.request.userId) {
      this.reqSvc.list().subscribe({
        next: (res) => {
          console.debug("Requests:");
          this.requests = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
  review(request: Request): void {
    if(request.total <= 50) {
      request.status = "APPROVED"
    } else {
      request.status = "REVIEW"
    }
    this.reqSvc.edit(request).subscribe({
      next: (res) => {
        console.debug("Request Reviewed");
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  approve(): void {
    this.reqSvc.edit(this.request).subscribe({
      next: (res) => {
        console.debug("Request Approved");
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  reject(): void {
    this.reqSvc.edit(this.request).subscribe({
      next: (res) => {
        console.debug("Request Approved");
        this.router.navigateByUrl("/request/list")
  },
  error: (err) => {
    console.error(err);
  }
});
}
}
