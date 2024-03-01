import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usernameOrEmail: string = '';
  password: string = '';
  constructor(private router: Router , private authService: AuthService) {}


  login() {
    // Simulation de données utilisateur (fausses données)
    const fakeUserData = [
      { usernameOrEmail: 'utilisateur1', password: 'password1' },
      { usernameOrEmail: 'utilisateur2', password: 'password2' },
      { usernameOrEmail: 'utilisateur3', password: 'password3' }
    ];

    // Vérification des informations de connexion
    const user = fakeUserData.find(u => u.usernameOrEmail === this.usernameOrEmail && u.password === this.password);

    if (user) {
      // Enregistrer les informations de connexion dans le sessionStorage
      this.authService.setCredentials(this.usernameOrEmail, this.password);
      sessionStorage.setItem('usernameOrEmail', this.usernameOrEmail);
      sessionStorage.setItem('password', this.password);

      // Redirection vers la page suivante (home)
      this.router.navigate(['']);
    } else {
      alert('Nom d\'utilisateur, email ou mot de passe incorrect.');
    }
  }
}


