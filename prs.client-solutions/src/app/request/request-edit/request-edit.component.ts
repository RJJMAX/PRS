import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from 'src/app/classes/request.class';
@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent {
  request!: Request;
  pageTitle = "Request Change";

  constructor(
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.reqSvc.edit(this.request).subscribe({
      next: (res) => {
        console.debug("Request Changed!");
        this.router.navigateByUrl("request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request Edited", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
