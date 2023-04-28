import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from 'src/app/classes/request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
pageTitle = "Request List";
request: Request[] = [];

sortColumn: string = "id";
sortAsc: boolean = true;

constructor(
  private reqSvc: RequestService,
 
) {}

selectColumn(col: string): void {
  if(col === this.sortColumn) {
    this.sortAsc = !this.sortAsc;
    return;
  }
  this.sortColumn = col;
  this.sortAsc = true;
}

ngOnInit(): void {
  this.reqSvc.list().subscribe({
    next: (res) => {  
      console.debug("Requests:", res);
      this.request = res;
    },
    error: (err) => {
      console.error(err);
    }
  });
}
}
