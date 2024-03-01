import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  usernameOrEmail: string | null = null;
  password: string | null = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.usernameOrEmail =  sessionStorage.getItem("usernameOrEmail")
   this.password =  sessionStorage.getItem("password")
    /*    // Abonnez-vous aux sujets BehaviorSubject pour récupérer les informations de connexion
        this.authService.usernameOrEmail$.subscribe(
          usernameOrEmail =>
            this.usernameOrEmail = usernameOrEmail

        );
        console.log(" this.usernameOrEmail " ,  this.usernameOrEmail)

        this.authService.password$.subscribe(
          password =>
            this.password = password
        );

        console.log(" this.password " ,  this.password)
      }*/
  }
}
