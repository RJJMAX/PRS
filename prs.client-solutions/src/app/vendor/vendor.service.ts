import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../classes/vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string = "http://localhost:9584/api/vendors"

  constructor(
    private http: HttpClient
  ) { }

   //GET ALL Vendor as a collection of Vendor[]
   list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
    //GET By ID
    get(id: number): Observable<Vendor> {
      return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
    // POST Vendor 'Create a new Vendor'
    create(vendor: Vendor): Observable<Vendor> {
      return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
    }
    //PUT Vendor 'Edit an Vendor return ANY 200 NO CONTENT'
    edit(vendor: Vendor): Observable<any> {
      return this.http.put(`${this.baseurl}/${vendor.id}`, vendor) as Observable<any>;
    }
    //DELETE 'Remove Vendor return ANY 200 NO CONTENT'
    remove(id: number): Observable<any> {
      return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
    }

}
