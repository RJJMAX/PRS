import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/classes/product.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
pageTitle = "Edit Product";
product!: Product

constructor(
  private proSvc: ProductService,
  private route: ActivatedRoute,
  private router: Router
) {}

save(): void {
  this.proSvc.edit(this.product).subscribe({
    next: (res) => {
      console.debug("Product Created!");
      this.router.navigateByUrl("/product/list");
    },
    error: (err) => {
      console.error(err)
    }
  });
}

ngOnInit(): void {
  let id = Number(this.route.snapshot.params["id"]);
  this.proSvc.get(id).subscribe({
    next: (res) => {
      console.debug("Product:", res);
      this.product = res;
    },
    error: (err) => {
      console.error(err);
    }
  })
}

}
