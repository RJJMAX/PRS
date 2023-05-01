import { Component } from '@angular/core';
import { Request } from 'src/app/classes/request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent {
  pageTitle = "Request Review"
  requests: Request[] = []; 
  request!: Request;
  verifyReject: boolean = false;

  constructor(
    private reqSvc: RequestService,
    private route: ActivatedRoute

  ) {}
    //Approve Request
  approve(request: Request) {
    return this.reqSvc.approve(request).subscribe({
      next: (res) => {
        console.debug("Request Approved!", res);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  //Reject Request
  reject(): void {
    
    this.verifyReject = !this.verifyReject;
  }

  //Verify Reject Request
  rejectRequest(request: Request) {
    return this.reqSvc.reject(this.request).subscribe({
      next: (res) => {
        console.debug("Request Approved!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id = Number(this.route.snapshot.params["id"]);
   this.reqSvc.get(id).subscribe({
     next: (res) => {
       console.debug("Request:");
       this.request = res;
     },
     error: (err) => {
       console.error(err);
     }
  });
  }
  
  ngOnInit(): void {
    
    let id = Number(this.route.snapshot.params["id"]);
    this.reqSvc.get(id).subscribe({
      next: (res) => {  
        console.debug("Requests:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
