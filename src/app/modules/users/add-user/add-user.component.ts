import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  editMode = false

  userForm = new FormGroup({
    nom: new FormControl(""),
    prenom : new FormControl(""),
    dateNaissance: new FormControl(""),
    genre : new FormControl(""),
    telephone :new FormControl(""),
    adresse : new FormControl(""),

    }) ;

    constructor(public userService : UserService){}

    ngOnInit(): void {

    }
    handleAddUser() {
      if (this.userForm.valid) {
        const newUser = this.userForm.value;
        console.log('ok')
        this.userService.addUser(newUser);
        // Réinitialiser le formulaire après l'ajout d'utilisateur
        this.userForm.reset();
      }
    }

    annulerFormulaire (){

        this.userForm.reset();
      }



}
