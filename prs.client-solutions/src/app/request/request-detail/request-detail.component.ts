import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from 'src/app/classes/request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
  request!: Request;
  pageTitle = "Request Detail";


  constructor(
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.reqSvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("User Removed!", res);
        this.router.navigateByUrl("user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  ngOnInit(): void{
    let id = Number(this.route.snapshot.params["id"]);
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.request = res;
    },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
