import { Component } from '@angular/core';
import { Product } from 'src/app/classes/product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  pageTitle = "Create Product";
  product: Product = new Product();

  constructor(
    private proSvc: ProductService,
    private router: Router
  ) {}

  save(): void {
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
    
  }

}
