import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from 'src/app/classes/vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
  pageTitle = "Edit Vendor";
  vendor!: Vendor;
 
  constructor(
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.vendSvc.edit(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Changed");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  
  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"]);
    this.vendSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor Edited", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
