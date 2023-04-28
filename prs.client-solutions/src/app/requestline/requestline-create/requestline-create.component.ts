import { Component } from '@angular/core';
import { Requestline } from 'src/app/classes/requestline.class';
import { RequestlineService } from '../requestline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {
  pageTitle = "Create Requestline";
  requestline: Requestline = new Requestline();

  constructor(
    private rlSvc: RequestlineService,
    private router: Router
  ) {}

  save(): void {
    this.rlSvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline:");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {

  }
}
