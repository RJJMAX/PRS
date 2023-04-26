import { Injectable } from '@angular/core';
import { User } from './classes/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User | null = null;

  constructor(
    private router: Router
  ) { }
  checkLogin(): void {
    if(this.loggedInUser === null) {
      this.router.navigateByUrl("/user/login");
    }
  }
}
