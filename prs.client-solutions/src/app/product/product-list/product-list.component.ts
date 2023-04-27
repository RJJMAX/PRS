import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system.service';
import { Product } from 'src/app/classes/product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
pageTitle = "Product List";
product: Product[] = [];

constructor(
  private proSvc: ProductService,
  private sysSvc: SystemService
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
