import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usernameOrEmailSubject = new BehaviorSubject<string | null>(null);
  private passwordSubject = new BehaviorSubject<string | null>(null);

  usernameOrEmail$ = this.usernameOrEmailSubject.asObservable();
  password$ = this.passwordSubject.asObservable();

  constructor() {}

  setCredentials(usernameOrEmail: string, password: string) {
    this.usernameOrEmailSubject.next(usernameOrEmail);
    this.passwordSubject.next(password);
  }

  isLoggedIn(){
    let token = sessionStorage.getItem("usernameOrEmail");
    if (token) {
      return true ;
    } else {
      return false;
    }
  }
}
