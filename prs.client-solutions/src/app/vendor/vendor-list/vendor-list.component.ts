import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { UserService } from 'src/app/user/user.service';
import { Vendor } from 'src/app/classes/vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  pageTitle = "Vendor List";
  vendor: Vendor[] = [];
  
  constructor(
    private vendSvc: VendorService  ) {}

  ngOnInit(): void {
    this.vendSvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
}
