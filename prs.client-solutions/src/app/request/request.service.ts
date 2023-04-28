import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../classes/request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseurl: string = "http://localhost:9584/api/requests";

  constructor(
    private http: HttpClient
  ) { }

  //GET ALL Request as a collection of Request[]
  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
    //GET By ID
    get(id: number): Observable<Request> {
      return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
    // POST Request 'Create a new Request'
    create(request: Request): Observable<Request> {
      return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
    }
    //PUT Request 'Edit an Request return ANY 200 NO CONTENT'
    edit(request: Request): Observable<any> {
      return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
    }
    //DELETE 'Remove Request return ANY 200 NO CONTENT'
    remove(id: number): Observable<any> {
      return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
    }

}
