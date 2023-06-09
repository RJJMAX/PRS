import { Component } from '@angular/core';
import { Vendor } from 'src/app/classes/vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
pageTitle = "Vendor Detail";
vendor!: Vendor;
showVerifyRemove: boolean = false;

constructor(
  private vendSvc: VendorService,
  private route: ActivatedRoute,
  private router: Router
) {}

remove(): void {
  this.vendSvc.remove(this.vendor.id).subscribe({
    next: (res) => {
      console.debug("Vendor Removed");
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
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
 }

  