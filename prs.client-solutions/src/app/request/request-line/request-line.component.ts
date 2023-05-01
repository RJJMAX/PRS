import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from 'src/app/classes/request.class';
import { User } from 'src/app/classes/user.class';
import { Requestline } from 'src/app/classes/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLineComponent {
pageTitle = "Request Line";
request!: Request;
requestline!: Requestline;
user!: User;

constructor(
  private reqSvc: RequestService,
  private rlSvc: RequestlineService,
  private route: ActivatedRoute
) {}

submitReview(): void {
  this.reqSvc.review(this.request).subscribe({
    next: (res) => {
      console.debug("Request Reviewed");
      this.request = res;
    },
    error: (err) => {
      console.error(err);
    }
  });
}

remove(id: number): void {
  this.rlSvc.remove(id).subscribe({
    next: (res) => {
      console.debug("Requestline Removed!", res);
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
     console.debug("Request:", res)
     this.request = res;
   },
   error: (err) => {
     console.error(err);
   }
});
}

ngOnInit(): void {
  this.refresh();
}
}

