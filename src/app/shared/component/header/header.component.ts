import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../modules/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router , private authService: AuthService) {}

  deconnexion(){
    this.router.navigate(['login']);
    sessionStorage.removeItem('usernameOrEmail');
    sessionStorage.removeItem('password');

  }

}
