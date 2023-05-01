import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from 'src/app/classes/request.class';
import { User } from 'src/app/classes/user.class';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/system.service';
@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
  pageTitle = "Request Review";
  request: Request[] = [];
  user!: User;
 

  constructor(
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private sysSvc: SystemService
  ) {}

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    let id = 0;
    if(typeof this.sysSvc.loggedInUser !== "undefined" && this.sysSvc.loggedInUser !== null){
    id = this.sysSvc.loggedInUser.id;}
    this.reqSvc.reviews(id).subscribe({
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