import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/classes/product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle = "Product Details";
  product!: Product;

  constructor(
    private proSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.proSvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.debug("Product Removed!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"]);
    this.proSvc.get(id).subscribe({
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
