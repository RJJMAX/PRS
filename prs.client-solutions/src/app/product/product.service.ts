import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product.class';
import { Vendor } from '../classes/vendor.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = "http://localhost:9584/api/products";

  constructor(
    private http: HttpClient
  ) { }

    //GET ALL Product as a collection of Product[]
    list(): Observable<Product[]> {
      return this.http.get(`${this.baseurl}`) as Observable<Product[]>;
    }
      //GET By ID
      get(id: number): Observable<Product> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
    }
      // POST Product 'Create a new Product'
      create(product: Product): Observable<Product> {
        return this.http.post(`${this.baseurl}`, product) as Observable<Product>;
      }
      //PUT Product 'Edit an Product return ANY 200 NO CONTENT'
      edit(product: Product): Observable<any> {
        return this.http.put(`${this.baseurl}/${product.id}`, product) as Observable<any>;
      }
      //DELETE 'Remove Product return ANY 200 NO CONTENT'
      remove(id: number): Observable<any> {
        return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
      }
  
}
