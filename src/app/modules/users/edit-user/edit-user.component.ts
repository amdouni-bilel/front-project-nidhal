import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../shared/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  editMode = false;
  userId: any;

  userForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    dateNaissance: new FormControl(''),
    genre: new FormControl(''),
    telephone: new FormControl(''),
    adresse: new FormControl('')
  });

  constructor(public userService: UserService, private route: ActivatedRoute , public router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log('ID de l\'utilisateur récupéré :', this.userId);

      if (this.userId) {
       // this.editMode = true;
        this.fillFormWithUserData();
      }
    });
  }

  fillFormWithUserData() {
    const userData = this.userService.users.find(user => user.id === this.userId);
    if (userData) {
      this.userForm.patchValue({
        nom: userData.NOM,
        prenom: userData.PRENOM,
        dateNaissance: userData.dateNaissance,
        genre: userData.GENRE,
        telephone: userData.TELEPHONE,
        adresse: userData.ADRESSE
      });
    }
  }

  handleAddUser() {
    if (this.userForm.valid) {
      const updatedUserData = {
        NOM: this.userForm.value.nom,
        PRENOM: this.userForm.value.prenom,
        dateNaissance: this.userForm.value.dateNaissance,
        GENRE: this.userForm.value.genre,
        TELEPHONE: this.userForm.value.telephone,
        ADRESSE: this.userForm.value.adresse
      };

      // Mettre à jour les données dans le tableau de fausses données
      const index = this.userService.users.findIndex(user => user.id === this.userId);
      if (index !== -1) {
        this.userService.users[index] = { id: this.userId, ...updatedUserData };
      }

      // Rediriger vers la liste des utilisateurs
      this.router.navigate(['/list-user']);
    }
  }}
