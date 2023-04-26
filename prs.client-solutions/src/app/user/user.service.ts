import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:9584/api/users"

  constructor(
    private http: HttpClient
  ) { }

  //GET All
  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>
  }
  //GET by ID
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>
  }
  //Login with Username and Password
  login(username: string, password: string): Observable<User> {
    return this.http.get(`${this.baseurl}/login/${username}/${password}`) as Observable<User>
  }
  //POST Create new user
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>
  }
  //PUT Edit user
  edit(user: User): Observable<any> {
    return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>
  }
  //REMOVE (delete) user by Id
  remove(id:number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }

}
