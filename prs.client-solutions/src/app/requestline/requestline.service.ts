import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from '../classes/requestline.class';
import { Product } from '../classes/product.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = "http://localhost:9584/api/requestLines"

  constructor(
    private http: HttpClient
  ) { }

  //GET ALL Requestline as a collection of Requestlines[]
  list(): Observable<Requestline[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>;
  }
    //GET By ID
    get(id: number): Observable<Requestline> {
      return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
    // POST Request 'Create a new Requestline'
    create(requestline: Requestline): Observable<Requestline> {
      return this.http.post(`${this.baseurl}`, requestline) as Observable<Requestline>;
    }
    //PUT Request 'Edit an Requestline return ANY 200 NO CONTENT'
    edit(requestline: Requestline): Observable<any> {
      return this.http.put(`${this.baseurl}/${requestline.id}`, requestline) as Observable<any>;
    }
    //DELETE 'Remove Requestline return ANY 200 NO CONTENT'
    remove(id: number): Observable<any> {
      return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
    }
  }
