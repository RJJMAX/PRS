import { Component } from '@angular/core';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from 'src/app/classes/requestline.class';
import { Product } from 'src/app/classes/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent {

pageTitle = "Requestline Change"
requestline!: Requestline;
product!: Product[];

constructor(
  private rlSvc: RequestlineService,
  private proSvc: ProductService,
  private route: ActivatedRoute,
  private router: Router
) {}

save(): void {
  this.requestline.productId =  Number(this.requestline.productId);
  this.rlSvc.edit(this.requestline).subscribe({
    next: (res) => {
      console.debug("Requestline Changed!");
      this.router.navigateByUrl("request/list");
    },
    error: (err) => {
      console.error(err);
    }
  });
}

ngOnInit(): void {
  this.proSvc.list().subscribe({
    next: (res) => {
      console.debug("Requestline Edited", res);
      this.product = res;
    },
    error: (err) => {
      console.error(err);
    }
  });
  let id = this.route.snapshot.params["id"];
  this.rlSvc.get(id).subscribe({
    next: (res) => {
      console.debug("Requestline:", res);
      this.requestline = res;
    },
    error: (err) => {
      console.error(err);
    }
  })
}

}

