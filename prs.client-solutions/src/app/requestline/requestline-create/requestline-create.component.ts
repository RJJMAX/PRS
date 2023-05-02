import { Component } from '@angular/core';
import { Requestline } from 'src/app/classes/requestline.class';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/classes/product.class';
import { Request } from 'src/app/classes/request.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from 'src/app/request/request.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {
  pageTitle = "Create Requestline";
  requestline: Requestline = new Requestline();
  request!: Request;
  product: Product[] = [];


  constructor(
    private rlSvc: RequestlineService,
    private proSvc: ProductService, 
    private route: ActivatedRoute,
    private router: Router,
  ) {}


  save(): void {
    this.requestline.requestId = Number(this.requestline.requestId);
    this.rlSvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline:");
        this.router.navigateByUrl(`/request/line/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"]);
    this.requestline.requestId = id;
    this.proSvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
  }
});
}
}