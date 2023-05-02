import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/classes/product.class';
import { Vendor } from 'src/app/classes/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
pageTitle = "Edit Product";
product!: Product;
vendor: Vendor[] = [];

constructor(
  private proSvc: ProductService,
  private vendSvc: VendorService,
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
  this.vendSvc.list().subscribe({
    next: (res) => {
      console.debug("Vendors", res);
      this.vendor = res;
    },
    error: (err) => {
      console.error(err);
    }
  })
}
}

