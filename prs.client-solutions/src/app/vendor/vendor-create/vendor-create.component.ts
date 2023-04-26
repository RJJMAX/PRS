import { Component } from '@angular/core';
import { Vendor } from 'src/app/classes/vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  pageTitle = "Create Vendor";
  vendor: Vendor = new Vendor();

  constructor(
    private vendSvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.vendSvc.create(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Created");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {

  }
}
