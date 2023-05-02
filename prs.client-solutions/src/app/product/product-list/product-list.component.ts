import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/classes/product.class';
import { Vendor } from 'src/app/classes/vendor.class';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
pageTitle = "Product List";
product: Product[] = [];
vendor!: Vendor[];

constructor(
  private proSvc: ProductService,
) {}


ngOnInit(): void {
  this.proSvc.list().subscribe({
    next: (res) => {
      console.debug("Products:", res);
      this.product = res;
  },
    error: (err) => {
      console.error(err);
    }
  });
}
}
