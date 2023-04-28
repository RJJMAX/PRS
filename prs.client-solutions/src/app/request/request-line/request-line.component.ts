import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Requestline } from 'src/app/classes/requestline.class';
import { Request } from 'src/app/classes/request.class';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/classes/user.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLineComponent {
pageTitle = "Request Line";
user!: User;
request!: Request;

constructor(
  private reqSvc: RequestService,
  private rlSvc: RequestlineService,
  private sysSvc: SystemService,
  private route: ActivatedRoute
) {}

submitReview(): void {}

// remove(requestline: Requestline): {
//   this.rlSvc.remove(id).subscribe({
//     next: (res) => {
//       console.debug("Requestline Removed!");
//       this.rlSvc = res;
//     }
//     error: (err) => {
//       console.error(err);
//     }
//   });
// }
// }

 ngOnInit(): void {
 let id = this.route.snapshot.params["id"];
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
}

