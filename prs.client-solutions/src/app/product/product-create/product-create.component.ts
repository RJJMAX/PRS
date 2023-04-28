import { Component } from '@angular/core';
import { Product } from 'src/app/classes/product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/classes/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  pageTitle = "Create Product";
  product: Product = new Product();
  vendor!: Vendor[];

  constructor(
    private proSvc: ProductService,
    private vendSvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.product.vendorId = Number(this.product.vendorId);
    this.proSvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product Created!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
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
